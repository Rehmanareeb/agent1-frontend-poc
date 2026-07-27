/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

type Agent2RunSummaryProps = {
  entryCount: number
  screenshotCount: number
}

function Agent2RunSummary({
  entryCount,
  screenshotCount
}: Agent2RunSummaryProps) {
  return (
    <div className='relay-evidence__summary'>
      <div className='relay-evidence__run'>
        <div className='relay-evidence__run-mark'>
          A2
        </div>

        <div style={{ minWidth: 0 }}>
          <div className='relay-evidence__run-name'>
            Current Computer Use run
          </div>
          <div className='relay-evidence__run-sub'>
            Ordered activity and screenshot trail
          </div>
        </div>
      </div>

      <div className='relay-evidence__metric'>
        <div className='relay-evidence__metric-value'>
          {entryCount}
        </div>
        <div className='relay-evidence__metric-label'>
          Activity steps
        </div>
      </div>

      <div className='relay-evidence__metric'>
        <div className='relay-evidence__metric-value'>
          {screenshotCount}
        </div>
        <div className='relay-evidence__metric-label'>
          Evidence frames
        </div>
      </div>
    </div>
  )
}

export default Agent2RunSummary
