/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

const baseField: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #d1cbc1',
  borderRadius: '11px',
  padding: '13px 14px',
  outline: 'none',
  color: '#17212f'
}

export const formStyles: {
  [key: string]: React.CSSProperties
} = {
  instructionBox: {
    ...baseField,
    minHeight: '190px',
    resize: 'vertical',
    background: '#faf8f4',
    fontSize: '14px',
    lineHeight: 1.65
  },

  feedbackBox: {
    ...baseField,
    minHeight: '130px',
    resize: 'vertical',
    background: '#faf8f4',
    fontSize: '13px',
    lineHeight: 1.65
  },

  csvBox: {
    ...baseField,
    minHeight: '290px',
    resize: 'vertical',
    borderColor: '#253548',
    background: '#0e1825',
    color: '#e2eaf2',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '12px',
    lineHeight: 1.6
  },

  agentInstructionBox: {
    ...baseField,
    minHeight: '290px',
    resize: 'vertical',
    background: '#faf8f4',
    fontSize: '13px',
    lineHeight: 1.7
  },

  detailTextArea: {
    ...baseField,
    minHeight: '165px',
    resize: 'vertical',
    background: '#fffdf9',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '11px',
    lineHeight: 1.6
  },

  rawResponseBox: {
    width: '100%',
    minHeight: '290px',
    boxSizing: 'border-box',
    resize: 'vertical',
    border: 0,
    borderRadius: 0,
    padding: '13px',
    outline: 'none',
    background: '#0d1724',
    color: '#9fdbc9',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '11px',
    lineHeight: 1.6
  },

  codeInput: {
    minWidth: 0,
    flex: 1,
    border: '1px solid #d1cbc1',
    borderRadius: '9px',
    padding: '9px 11px',
    outline: 'none'
  }
}
