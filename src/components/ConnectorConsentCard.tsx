/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'
import { ConsentCardInfo } from '../types'

type ConnectorConsentCardProps = {
  consentCard: ConsentCardInfo
  isLoading: boolean
  onRespond: (action: 'Allow' | 'Cancel') => void
}

function ConnectorConsentCard({
  consentCard,
  isLoading,
  onRespond
}: ConnectorConsentCardProps) {
  return (
    <section
      className='relay-card relay-card--amber'
      style={styles.consentCard}
    >
      <div style={styles.consentIcon}>
        !
      </div>

      <div className='relay-eyebrow'>
        Connector gate
      </div>

      <h2 style={styles.consentTitle}>
        {consentCard.title}
      </h2>

      <p style={styles.consentDescription}>
        Agent 1 needs permission to use{' '}
        <strong>
          {consentCard.connectorName}
        </strong>{' '}
        before it can continue the approved save
        operation.
      </p>

      <p style={styles.consentDescription}>
        {consentCard.description}
      </p>

      <div style={styles.permissionBox}>
        <div style={styles.permissionLabel}>
          Requested capability
        </div>

        <div style={styles.permissionText}>
          {consentCard.permissions}
        </div>
      </div>

      <div className='relay-consent-actions'>
        <button
          type='button'
          className='relay-button'
          onClick={() => onRespond('Allow')}
          disabled={isLoading}
          style={
            isLoading
              ? styles.successButtonDisabled
              : styles.successButton
          }
        >
          Allow connector
        </button>

        <button
          type='button'
          className='relay-button'
          onClick={() => onRespond('Cancel')}
          disabled={isLoading}
          style={
            isLoading
              ? styles.secondaryButtonDisabled
              : styles.cancelButton
          }
        >
          Cancel
        </button>
      </div>
    </section>
  )
}

export default ConnectorConsentCard
