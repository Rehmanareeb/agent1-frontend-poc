/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'

type FeedbackCardProps = {
  feedback: string
  canRevise: boolean
  isLoading: boolean
  onFeedbackChange: (feedback: string) => void
  onSendChanges: () => void
}

function FeedbackCard({
  feedback,
  canRevise,
  isLoading,
  onFeedbackChange,
  onSendChanges
}: FeedbackCardProps) {
  const disabled = !canRevise || isLoading

  return (
    <section
      className='relay-card relay-card--amber'
      style={styles.card}
    >
      <div className='relay-card-head'>
        <div>
          <div className='relay-eyebrow'>
            Revision loop
          </div>

          <h2 style={styles.cardTitle}>
            Refine before handoff
          </h2>

          <p style={styles.cardDescription}>
            Send targeted corrections while keeping
            the current package in draft. Nothing is
            saved or executed during revision.
          </p>
        </div>

        <div className='relay-step-mark'>
          A1 / 02
        </div>
      </div>

      <label
        className='relay-field-label'
        htmlFor='relay-feedback-input'
      >
        Change request
      </label>

      <textarea
        id='relay-feedback-input'
        value={feedback}
        onChange={event =>
          onFeedbackChange(event.target.value)
        }
        style={styles.feedbackBox}
        placeholder='Example: Keep one test case row, use placeholders for missing required values, and make the expected result more explicit.'
      />

      <div className='relay-action-row'>
        <span className='relay-action-note'>
          Revision requests are applied to the
          current draft only.
        </span>

        <button
          type='button'
          className='relay-button'
          onClick={onSendChanges}
          disabled={disabled}
          style={
            disabled
              ? styles.secondaryButtonDisabled
              : styles.secondaryButton
          }
        >
          <span
            className='relay-button__icon'
            aria-hidden='true'
          >
            ↺
          </span>
          Send revision
        </button>
      </div>
    </section>
  )
}

export default FeedbackCard
