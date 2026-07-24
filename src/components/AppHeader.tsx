/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'
import ProductTheme from './ProductTheme'

type AppHeaderProps = {
  status: string
  isConnected: boolean
}

function AppHeader({
  status,
  isConnected
}: AppHeaderProps) {
  return (
    <>
      <ProductTheme />

      <header
        className='relay-masthead'
        style={styles.header}
      >
        <div style={{ minWidth: 0, flex: 1 }}>
          <div className='relay-brand-lockup'>
            <div
              className='relay-brand-mark'
              aria-hidden='true'
            />

            <div>
              <div style={styles.badge}>
                Agent Relay Workbench
              </div>

              <h1 style={styles.title}>
                Test operations control room
              </h1>
            </div>
          </div>

          <p style={styles.subtitle}>
            Author the scenario with Agent 1,
            inspect the handoff package, then run
            the approved script through Agent 2 and
            preserve its Computer Use evidence.
          </p>

          <div
            className='relay-phase-strip'
            aria-label='Workflow stages'
          >
            <div className='relay-phase'>
              <div className='relay-phase__label'>
                Stage 01
              </div>
              <div className='relay-phase__value'>
                Scenario authoring
              </div>
            </div>

            <div className='relay-phase'>
              <div className='relay-phase__label'>
                Stage 02
              </div>
              <div className='relay-phase__value'>
                Review and approval
              </div>
            </div>

            <div className='relay-phase'>
              <div className='relay-phase__label'>
                Stage 03
              </div>
              <div className='relay-phase__value'>
                CUA execution evidence
              </div>
            </div>
          </div>
        </div>

        <div
          className='relay-connection-card'
          style={styles.statusCard}
        >
          <span
            style={
              isConnected
                ? styles.statusDotConnected
                : styles.statusDotWaiting
            }
            aria-hidden='true'
          />

          <div>
            <div style={styles.statusLabel}>
              Agent 1 channel
            </div>

            <div style={styles.statusText}>
              {status}
            </div>

            <div className='relay-connection-meta'>
              {isConnected
                ? 'Authenticated · Ready for authoring'
                : 'Establishing authenticated session'}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default AppHeader
