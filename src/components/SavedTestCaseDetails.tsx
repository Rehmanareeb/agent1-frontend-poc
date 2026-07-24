/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'
import { SavedTestCase } from '../types'

type SavedTestCaseDetailsProps = {
  testCase: SavedTestCase
  onClose: () => void
}

function SavedTestCaseDetails({
  testCase,
  onClose
}: SavedTestCaseDetailsProps) {
  return (
    <div style={styles.detailCard}>
      <div className='relay-card-head'>
        <div>
          <div className='relay-eyebrow'>
            Selected run package
          </div>

          <h3 style={styles.cardTitle}>
            {testCase.name}
          </h3>
        </div>

        <button
          type='button'
          onClick={onClose}
          style={styles.closeButton}
          aria-label='Close saved test case details'
        >
          ×
        </button>
      </div>

      <div className='relay-details-grid'>
        <div>
          <div style={styles.previewLabel}>
            CSV preview
          </div>

          <textarea
            value={testCase.csvContent}
            readOnly
            style={styles.detailTextArea}
          />
        </div>

        <div>
          <div style={styles.previewLabel}>
            Agent 2 instruction
          </div>

          <textarea
            value={testCase.instruction}
            readOnly
            style={styles.detailTextArea}
          />
        </div>
      </div>
    </div>
  )
}

export default SavedTestCaseDetails
