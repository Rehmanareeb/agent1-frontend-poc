/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'
import { SavedTestCase } from '../types'

type SavedTestCaseRowProps = {
  testCase: SavedTestCase
  isPlaying: boolean
  onSelect: (testCase: SavedTestCase) => void
  onPlay: (testCase: SavedTestCase) => void
}

function SavedTestCaseRow({
  testCase,
  isPlaying,
  onSelect,
  onPlay
}: SavedTestCaseRowProps) {
  const shortId = String(testCase.id)
    .slice(-2)
    .padStart(2, '0')

  return (
    <div
      className='relay-run-row'
      style={styles.savedRow}
      onClick={() => onSelect(testCase)}
      role='button'
      tabIndex={0}
      onKeyDown={event => {
        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault()
          onSelect(testCase)
        }
      }}
    >
      <div className='relay-run-name-wrap'>
        <div className='relay-run-index'>
          {shortId}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={styles.savedRowName}>
            {testCase.name}
          </div>

          <div
            style={{
              marginTop: 4,
              color: '#7b8491',
              fontSize: 11
            }}
          >
            Approved handoff · ready for CUA
          </div>
        </div>
      </div>

      <button
        type='button'
        className='relay-button'
        onClick={event => {
          event.stopPropagation()
          onPlay(testCase)
        }}
        style={
          isPlaying
            ? styles.playButtonLoading
            : styles.playButton
        }
        disabled={isPlaying}
        title='Run with Agent 2'
        aria-label={`Run ${testCase.name} with Agent 2`}
      >
        {isPlaying ? '…' : '▶'}
      </button>
    </div>
  )
}

export default SavedTestCaseRow
