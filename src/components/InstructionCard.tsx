/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { styles } from '../styles'

type InstructionCardProps = {
  instruction: string
  canGenerate: boolean
  isLoading: boolean
  onInstructionChange: (instruction: string) => void
  onGenerate: () => void
}

function InstructionCard({
  instruction,
  canGenerate,
  isLoading,
  onInstructionChange,
  onGenerate
}: InstructionCardProps) {
  const disabled = !canGenerate || isLoading

  return (
    <section
      className='relay-card'
      style={styles.card}
    >
      <div className='relay-card-head'>
        <div>
          <div className='relay-eyebrow'>
            Agent 1 input
          </div>

          <h2 style={styles.cardTitle}>
            Describe the test objective
          </h2>

          <p style={styles.cardDescription}>
            State the business outcome, target
            system, important data and the expected
            result. Agent 1 converts it into a
            reusable execution package.
          </p>
        </div>

        <div className='relay-step-mark'>
          A1 / 01
        </div>
      </div>

      <label
        className='relay-field-label'
        htmlFor='relay-scenario-input'
      >
        Scenario brief
      </label>

      <textarea
        id='relay-scenario-input'
        value={instruction}
        onChange={event =>
          onInstructionChange(event.target.value)
        }
        style={styles.instructionBox}
        placeholder='Example: Open the customer workspace, create a new customer with the required fields, save the record, and verify that it appears in search.'
      />

      <div className='relay-action-row'>
        <span className='relay-action-note'>
          No data is saved until the review gate is
          approved.
        </span>

        <button
          type='button'
          className='relay-button'
          onClick={onGenerate}
          disabled={disabled}
          style={
            disabled
              ? styles.primaryButtonDisabled
              : styles.primaryButton
          }
        >
          <span
            className='relay-button__icon'
            aria-hidden='true'
          >
            ↗
          </span>
          {isLoading
            ? 'Generating package…'
            : 'Generate test package'}
        </button>
      </div>
    </section>
  )
}

export default InstructionCard
