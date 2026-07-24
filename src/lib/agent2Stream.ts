/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Agent2StreamEntry } from '../types'
import {
  containsScreenshotReference,
  extractScreenshotUrls
} from './screenshotExtraction'
import {
  ADAPTIVE_CARD_CONTENT_TYPE,
  collectTextFromCard
} from './activityUtils'

export type Agent2StreamProcessor = {
  /**
   * Folds one Direct Line activity into the ordered entry list. Returns the
   * updated list, or null when the activity carried nothing worth showing.
   */
  process(activity: any): Agent2StreamEntry[] | null

  /**
   * Drops all accumulated entries so the next run starts a fresh stream.
   */
  reset(): void
}


const RUN_FINISHED_TEXT_PATTERN = /computer use task is finished/i
const RUN_THROTTLED_TEXT_PATTERN = /still throttled\s*[—–-]\s*system capacity limit reached/i


export function isAgent2RunThrottled(activity: any): boolean {
  if (activity?.from?.role === 'bot' && activity?.type === 'message') {
    const text = getActivityText(activity)
    return Boolean(text && RUN_THROTTLED_TEXT_PATTERN.test(text))
  }

  return false
}

export function isAgent2RunFinished(activity: any): boolean {
  const isFinishedMessage =
    activity?.from?.role === 'bot' &&
    activity?.type === 'message' &&
    Boolean(activity?.channelData?.feedbackLoop) &&
    typeof activity?.text === 'string' &&
    RUN_FINISHED_TEXT_PATTERN.test(activity.text)

  return isFinishedMessage || isAgent2RunThrottled(activity)
}

function getAdaptiveCardText(activity: any): string | undefined {
  const attachments = Array.isArray(activity?.attachments)
    ? activity.attachments
    : []

  for (const attachment of attachments) {
    if (
      attachment?.contentType !== ADAPTIVE_CARD_CONTENT_TYPE ||
      !attachment.content
    ) {
      continue
    }

    const combined = collectTextFromCard(attachment.content).join('\n').trim()

    if (combined) {
      return combined
    }

    const fallbackText = attachment.content.fallbackText

    if (typeof fallbackText === 'string' && fallbackText.trim()) {
      return fallbackText.trim()
    }
  }

  return undefined
}

function getActivityText(activity: any): string | undefined {
  const text = typeof activity?.text === 'string' ? activity.text.trim() : ''

  return text || getAdaptiveCardText(activity)
}

function getActivityTimestamp(activity: any): string {
  const timestamp = activity?.timestamp

  if (typeof timestamp === 'string') {
    return timestamp
  }

  if (timestamp instanceof Date) {
    return timestamp.toISOString()
  }

  return new Date().toISOString()
}
export function createAgent2StreamProcessor(): Agent2StreamProcessor {
  let entries: Agent2StreamEntry[] = []
  let sequence = 0

  function createEntryId(activity: any): string {
    sequence += 1

    const activityId = typeof activity?.id === 'string' ? activity.id : ''

    return activityId
      ? `${activityId}-${sequence}`
      : `stream-entry-${sequence}`
  }

  return {
    reset(): void {
      entries = []
      sequence = 0
    },

    process(activity: any): Agent2StreamEntry[] | null {

      if (activity?.from?.role === 'user') {
        return null
      }

      const text = getActivityText(activity)
      const screenshots = extractScreenshotUrls(activity)
      const hasScreenshotReference = containsScreenshotReference(text)

      // Nothing visible: OAuth cards, typing and status events land here.
      if (!text && screenshots.length === 0 && !hasScreenshotReference) {
        return null
      }

      const activityId = typeof activity?.id === 'string' ? activity.id : undefined
      const activityType = typeof activity?.type === 'string' ? activity.type : 'unknown'
      const replyToId = typeof activity?.replyToId === 'string' ? activity.replyToId : undefined

   
      if (text) {
        const entry: Agent2StreamEntry = {
          id: createEntryId(activity),
          activityId,
          activityType,
          text,
          screenshots,
          hasScreenshotReference,
          createdAt: getActivityTimestamp(activity)
        }

        entries = [...entries, entry]

        if (hasScreenshotReference && screenshots.length === 0) {
          console.warn(
            '[Agent 2] Screenshot reference received, but no image URL or image data was included in the Direct Line activity.',
            { activityId, text }
          )
        }

        return entries
      }

    
      let targetIndex = -1

      if (replyToId) {
        targetIndex = entries.findIndex(entry => entry.activityId === replyToId)
      }

      if (targetIndex === -1 && entries.length > 0) {
        targetIndex = entries.length - 1
      }

      if (targetIndex >= 0) {
        const target = entries[targetIndex]

        const updatedEntry: Agent2StreamEntry = {
          ...target,
          screenshots: Array.from(new Set([...target.screenshots, ...screenshots]))
        }

        const nextEntries = [...entries]
        nextEntries[targetIndex] = updatedEntry
        entries = nextEntries

        return entries
      }

  
      const imageOnlyEntry: Agent2StreamEntry = {
        id: createEntryId(activity),
        activityId,
        activityType,
        screenshots,
        hasScreenshotReference,
        createdAt: getActivityTimestamp(activity)
      }

      entries = [...entries, imageOnlyEntry]

      return entries
    }
  }
}
