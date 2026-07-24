/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

const baseButton: React.CSSProperties = {
  borderRadius: '10px',
  padding: '10px 15px',
  fontWeight: 850
}

export const buttonStyles: {
  [key: string]: React.CSSProperties
} = {
  primaryButton: {
    ...baseButton,
    border: '1px solid #a94f2b',
    background: '#bd5b32',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(189, 91, 50, .20)'
  },

  primaryButtonDisabled: {
    ...baseButton,
    border: '1px solid #d6d0c7',
    background: '#e2ddd5',
    color: '#938b82',
    cursor: 'not-allowed'
  },

  successButton: {
    ...baseButton,
    border: '1px solid #256a4d',
    background: '#2d7a58',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(45, 122, 88, .18)'
  },

  successButtonDisabled: {
    ...baseButton,
    border: '1px solid #d6d0c7',
    background: '#e2ddd5',
    color: '#938b82',
    cursor: 'not-allowed'
  },

  secondaryButton: {
    ...baseButton,
    border: '1px solid #c9c2b8',
    background: '#fffdf9',
    color: '#3d4959',
    cursor: 'pointer'
  },

  secondaryButtonDisabled: {
    ...baseButton,
    border: '1px solid #ddd7cf',
    background: '#ece8e2',
    color: '#9b948c',
    cursor: 'not-allowed'
  },

  cancelButton: {
    ...baseButton,
    border: '1px solid #d1cbc1',
    background: '#f2eee8',
    color: '#4e5968',
    cursor: 'pointer'
  },

  playButton: {
    width: '42px',
    height: '42px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid #096f72',
    borderRadius: '11px',
    background: '#0b7f82',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 900,
    boxShadow: '0 9px 21px rgba(11, 127, 130, .20)'
  },

  playButtonLoading: {
    width: '42px',
    height: '42px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid #d6d0c7',
    borderRadius: '11px',
    background: '#e2ddd5',
    color: '#938b82',
    cursor: 'not-allowed',
    fontSize: '14px',
    fontWeight: 900
  },

  closeButton: {
    width: '34px',
    height: '34px',
    border: '1px solid #d4cec5',
    borderRadius: '9px',
    background: '#fffdf9',
    color: '#4d5867',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 700
  }
}
