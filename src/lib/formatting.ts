/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Turns a raw Direct Line activity type ("message", "typing-indicator")
 * into a display label ("Message", "Typing Indicator").
 */
export function formatActivityType(value: string): string {
  return (value || 'activity')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, character =>
      character.toUpperCase()
    )
}

/**
 * Formats an ISO timestamp as a local HH:MM:SS time. Returns an empty
 * string for unparseable input so callers can render nothing.
 */
export function formatTime(value: string): string {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
