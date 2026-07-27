/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { agent2EvidenceCss } from '../styles/agent2Evidence'
import { Agent2StreamEntry } from '../types'

import Agent2EvidenceHeader from './Agent2EvidenceHeader'
import Agent2AuthCard from './Agent2AuthCard'
import Agent2RunSummary from './Agent2RunSummary'
import Agent2EvidenceEntry from './Agent2EvidenceEntry'
import Agent2ScreenshotPreview from './Agent2ScreenshotPreview'

type Agent2PanelProps = {
  signInUrl: string | null
  entries: Agent2StreamEntry[]
  isRunning: boolean
  magicCode: string
  onMagicCodeChange: (magicCode: string) => void
  onSubmitMagicCode: () => void
  onDismissSignIn: () => void
  onClearRun: () => void
}

function Agent2Panel({
  signInUrl,
  entries,
  isRunning,
  magicCode,
  onMagicCodeChange,
  onSubmitMagicCode,
  onDismissSignIn,
  onClearRun
}: Agent2PanelProps) {
  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null)

  const streamRef =
    useRef<HTMLDivElement | null>(null)

  const screenshotCount = useMemo(
    () =>
      entries.reduce(
        (total, entry) =>
          total + entry.screenshots.length,
        0
      ),
    [entries]
  )

  const statusLabel = isRunning
    ? 'Recording'
    : entries.length > 0
      ? 'Run complete'
      : 'Standby'

  useEffect(() => {
    if (!isRunning || !streamRef.current) {
      return
    }

    streamRef.current.scrollTo({
      top: streamRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [entries, screenshotCount, isRunning])

  return (
    <>
      <style>{agent2EvidenceCss}</style>

      <section
        className='relay-evidence'
        aria-label='Agent 2 Computer Use execution evidence'
      >
        <Agent2EvidenceHeader
          isRunning={isRunning}
          statusLabel={statusLabel}
          onClearRun={onClearRun}
        />

        {signInUrl && (
          <Agent2AuthCard
            signInUrl={signInUrl}
            magicCode={magicCode}
            onMagicCodeChange={onMagicCodeChange}
            onSubmitMagicCode={onSubmitMagicCode}
            onDismissSignIn={onDismissSignIn}
          />
        )}

        <Agent2RunSummary
          entryCount={entries.length}
          screenshotCount={screenshotCount}
        />

        <div
          ref={streamRef}
          className='relay-evidence__stream'
          aria-live='polite'
        >
          {entries.length === 0 ? (
            <div className='relay-evidence__empty'>
              <div>
                <div
                  className='relay-evidence__empty-mark'
                  aria-hidden='true'
                />
                <div className='relay-evidence__empty-title'>
                  Evidence channel ready
                </div>
                <div className='relay-evidence__empty-copy'>
                  Play an approved test package to
                  begin the live CUA stream. Runtime
                  comments and full-width screenshots
                  will appear here in arrival order.
                </div>
              </div>
            </div>
          ) : (
            entries.map((entry, entryIndex) => (
              <Agent2EvidenceEntry
                key={entry.id}
                entry={entry}
                entryIndex={entryIndex}
                onPreview={setPreviewUrl}
              />
            ))
          )}
        </div>
      </section>

      {previewUrl && (
        <Agent2ScreenshotPreview
          url={previewUrl}
          onClose={() => setPreviewUrl(null)}
        />
      )}
    </>
  )
}

export default Agent2Panel
