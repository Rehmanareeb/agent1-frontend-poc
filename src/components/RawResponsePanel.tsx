/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'

type RawResponsePanelProps = {
  fullResponse: string
}

function RawResponsePanel({
  fullResponse
}: RawResponsePanelProps) {
  return (
    <details style={styles.detailsBox}>
      <summary style={styles.detailsSummary}>
        Inspect raw Agent 1 activity stream
      </summary>

      <div className='relay-raw-console'>
        <div className='relay-raw-console__bar'>
          <span>Agent 1 diagnostics</span>

          <span className='relay-raw-console__lights'>
            <span />
            <span />
            <span />
          </span>
        </div>

        <textarea
          value={
            fullResponse ||
            'No Agent 1 activity has been received yet.'
          }
          readOnly
          style={styles.rawResponseBox}
          aria-label='Raw Agent 1 activity response'
        />
      </div>
    </details>
  )
}

export default RawResponsePanel
