/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { useEffect } from 'react'

type Agent2ScreenshotPreviewProps = {
  url: string
  onClose: () => void
}

/**
 * Full-screen modal for a single Computer Use screenshot. Locks body
 * scrolling while open and closes on Escape or a backdrop click.
 */
function Agent2ScreenshotPreview({
  url,
  onClose
}: Agent2ScreenshotPreviewProps) {
  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener(
      'keydown',
      closeOnEscape
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        'keydown',
        closeOnEscape
      )
    }
  }, [onClose])

  return (
    <div
      className='relay-evidence__preview'
      role='dialog'
      aria-modal='true'
      aria-label='Computer Use screenshot preview'
    >
      <div className='relay-evidence__preview-head'>
        <span className='relay-evidence__preview-title'>
          CUA evidence · original frame
        </span>
        <button
          type='button'
          className='relay-evidence__preview-close'
          onClick={onClose}
          autoFocus
        >
          Close
        </button>
      </div>

      <div
        className='relay-evidence__preview-body'
        onMouseDown={event => {
          if (event.target === event.currentTarget) {
            onClose()
          }
        }}
      >
        <img
          className='relay-evidence__preview-image'
          src={url}
          alt='Computer Use screenshot at full size'
        />
      </div>
    </div>
  )
}

export default Agent2ScreenshotPreview
