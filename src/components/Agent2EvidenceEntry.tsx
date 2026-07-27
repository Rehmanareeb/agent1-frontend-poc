/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

import { formatActivityType, formatTime } from '../lib/formatting'
import { Agent2StreamEntry } from '../types'

type Agent2EvidenceEntryProps = {
  entry: Agent2StreamEntry
  entryIndex: number
  onPreview: (url: string) => void
}

function Agent2EvidenceEntry({
  entry,
  entryIndex,
  onPreview
}: Agent2EvidenceEntryProps) {
  return (
    <article className='relay-evidence__entry'>
      <div className='relay-evidence__rail'>
        <div className='relay-evidence__number'>
          {String(entryIndex + 1).padStart(2, '0')}
        </div>
      </div>

      <div className='relay-evidence__entry-card'>
        <div className='relay-evidence__meta'>
          <span className='relay-evidence__type'>
            {formatActivityType(entry.activityType)}
          </span>
          <time className='relay-evidence__time'>
            {formatTime(entry.createdAt)}
          </time>
        </div>

        {entry.text && (
          <div className='relay-evidence__text'>
            {entry.text}
          </div>
        )}

        {entry.screenshots.map(
          (url, screenshotIndex) => (
            <figure
              key={`${entry.id}-${screenshotIndex}`}
              className='relay-evidence__frame'
            >
              <figcaption className='relay-evidence__frame-bar'>
                <span className='relay-evidence__frame-label'>
                  Evidence frame{' '}
                  {screenshotIndex + 1}
                </span>

                <button
                  type='button'
                  className='relay-evidence__expand'
                  onClick={() => onPreview(url)}
                >
                  Open full size
                </button>
              </figcaption>

              <button
                type='button'
                className='relay-evidence__image-button'
                onClick={() => onPreview(url)}
                aria-label={`Open screenshot ${
                  screenshotIndex + 1
                } at full size`}
              >
                <img
                  className='relay-evidence__image'
                  src={url}
                  alt={`Computer Use screenshot ${
                    screenshotIndex + 1
                  } for activity ${
                    entryIndex + 1
                  }`}
                />
              </button>
            </figure>
          )
        )}

        {entry.hasScreenshotReference &&
          entry.screenshots.length === 0 && (
            <div className='relay-evidence__pending'>
              This activity referenced a
              screenshot, but the image data
              has not arrived yet.
            </div>
          )}
      </div>
    </article>
  )
}

export default Agent2EvidenceEntry
