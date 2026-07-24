/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

type Agent2EvidenceHeaderProps = {
  isRunning: boolean
  statusLabel: string
  onClearRun: () => void
}

function Agent2EvidenceHeader({
  isRunning,
  statusLabel,
  onClearRun
}: Agent2EvidenceHeaderProps) {
  return (
    <header className='relay-evidence__header'>
      <div>
        <div className='relay-evidence__kicker'>
          Agent 2 · Evidence recorder
        </div>

        <h2 className='relay-evidence__title'>
          Computer Use execution record
        </h2>

        <p className='relay-evidence__description'>
          Each progress message remains attached
          to the screenshot evidence captured for
          that activity. Select a frame to inspect
          the original image at full size.
        </p>
      </div>

      <div className='relay-evidence__actions'>
        <div
          className={
            isRunning
              ? 'relay-evidence__status relay-evidence__status--live'
              : 'relay-evidence__status'
          }
        >
          <span
            className='relay-evidence__status-dot'
            aria-hidden='true'
          />
          {statusLabel}
        </div>

        <button
          type='button'
          className='relay-evidence__clear'
          onClick={onClearRun}
        >
          Clear run
        </button>
      </div>
    </header>
  )
}

export default Agent2EvidenceHeader
