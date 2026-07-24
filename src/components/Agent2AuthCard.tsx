/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

type Agent2AuthCardProps = {
  signInUrl: string
  magicCode: string
  onMagicCodeChange: (magicCode: string) => void
  onSubmitMagicCode: () => void
  onDismissSignIn: () => void
}

function Agent2AuthCard({
  signInUrl,
  magicCode,
  onMagicCodeChange,
  onSubmitMagicCode,
  onDismissSignIn
}: Agent2AuthCardProps) {
  return (
    <div className='relay-evidence__auth'>
      <h3 className='relay-evidence__auth-title'>
        Agent 2 authentication required
      </h3>

      <p className='relay-evidence__auth-copy'>
        Silent token exchange was unavailable.
        Complete the existing fallback sign-in
        and submit the validation code.
      </p>

      <div className='relay-evidence__auth-actions'>
        <button
          type='button'
          className='relay-evidence__button'
          onClick={() => {
            window.open(
              signInUrl,
              'agent2-signin',
              'width=520,height=680'
            )
          }}
        >
          Sign in to Agent 2
        </button>

        <button
          type='button'
          className='relay-evidence__clear'
          onClick={onDismissSignIn}
        >
          Dismiss
        </button>
      </div>

      <label
        className='relay-evidence__code-label'
        htmlFor='agent2-validation-code'
      >
        Validation code
      </label>

      <div className='relay-evidence__code-row'>
        <input
          id='agent2-validation-code'
          className='relay-evidence__code'
          value={magicCode}
          onChange={event =>
            onMagicCodeChange(event.target.value)
          }
          placeholder='e.g. 954858'
        />

        <button
          type='button'
          className='relay-evidence__button'
          onClick={onSubmitMagicCode}
          disabled={!magicCode.trim()}
        >
          Submit code
        </button>
      </div>
    </div>
  )
}

export default Agent2AuthCard
