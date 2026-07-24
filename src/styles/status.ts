/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

export const statusStyles: {
  [key: string]: React.CSSProperties
} = {
  statusCard: {
    minWidth: '310px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px 16px',
    border: '1px solid #d8d2c8',
    borderRadius: '13px',
    background: '#f7f4ef'
  },

  statusDotConnected: {
    width: '10px',
    height: '10px',
    flex: '0 0 10px',
    borderRadius: '50%',
    background: '#2d9c72',
    boxShadow: '0 0 0 5px rgba(45, 156, 114, .12)'
  },

  statusDotWaiting: {
    width: '10px',
    height: '10px',
    flex: '0 0 10px',
    borderRadius: '50%',
    background: '#c28a2c',
    boxShadow: '0 0 0 5px rgba(194, 138, 44, .12)'
  },

  statusLabel: {
    color: '#7b746c',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '9px',
    fontWeight: 850,
    letterSpacing: '.09em',
    textTransform: 'uppercase'
  },

  statusText: {
    marginTop: '4px',
    color: '#293547',
    fontSize: '13px',
    fontWeight: 800
  },

  outputTag: {
    padding: '6px 9px',
    border: '1px solid #c8ddd4',
    borderRadius: '8px',
    background: '#edf7f2',
    color: '#2d7056',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '9px',
    fontWeight: 850,
    letterSpacing: '.04em',
    textTransform: 'uppercase'
  },

  outputTagPurple: {
    padding: '6px 9px',
    border: '1px solid #c7d9d8',
    borderRadius: '8px',
    background: '#eaf4f3',
    color: '#0b6f72',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '9px',
    fontWeight: 850,
    letterSpacing: '.04em',
    textTransform: 'uppercase'
  },

  emptyState: {
    padding: '20px',
    border: '1px dashed #c9c2b8',
    borderRadius: '12px',
    background: '#f8f5f0',
    color: '#767e89',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: 1.6
  }
}
