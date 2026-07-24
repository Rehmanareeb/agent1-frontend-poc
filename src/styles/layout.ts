/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

export const layoutStyles: {
  [key: string]: React.CSSProperties
} = {
  page: {
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    padding: '30px',
    overflowX: 'hidden',
    overflowY: 'auto',
    color: '#17212f',
    fontFamily:
      'Inter, Aptos, Segoe UI, Arial, sans-serif',
    backgroundColor: '#f2efe9',
    backgroundImage:
      'linear-gradient(rgba(75, 70, 62, .045) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 70, 62, .045) 1px, transparent 1px)',
    backgroundSize: '32px 32px'
  },

  header: {
    maxWidth: '1500px',
    margin: '0 auto 24px',
    padding: '25px 26px 22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '26px',
    border: '1px solid #d8d2c8',
    borderRadius: '18px',
    background: 'rgba(255, 253, 249, .96)',
    boxShadow: '0 20px 54px rgba(35, 42, 52, .10)'
  },

  badge: {
    display: 'inline-block',
    color: '#736d65',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '10px',
    fontWeight: 850,
    letterSpacing: '.12em',
    textTransform: 'uppercase'
  },

  title: {
    margin: '6px 0 0',
    color: '#17212f',
    fontSize: '34px',
    lineHeight: 1.08,
    fontWeight: 850,
    letterSpacing: '-.035em'
  },

  subtitle: {
    maxWidth: '830px',
    margin: '13px 0 0',
    color: '#68717f',
    fontSize: '14px',
    lineHeight: 1.65
  },

  grid: {
    maxWidth: '1500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
    gap: '22px',
    alignItems: 'start'
  },

  leftColumn: {
    minWidth: 0,
    width: '100%',
    maxWidth: '560px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },

  rightColumn: {
    minWidth: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },

  buttonRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
    flexWrap: 'wrap'
  },

  outputHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px'
  },

  signInSection: {
    marginBottom: 16
  },

  signInCodeSection: {
    marginTop: 12
  }
}
