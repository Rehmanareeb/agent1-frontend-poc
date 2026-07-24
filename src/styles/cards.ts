/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react'

export const cardStyles: {
  [key: string]: React.CSSProperties
} = {
  card: {
    background: '#fffdf9',
    borderRadius: '18px',
    padding: '22px',
    border: '1px solid #d8d2c8',
    boxShadow: '0 16px 42px rgba(35, 42, 52, .085)'
  },

  outputCard: {
    background: '#fffdf9',
    borderRadius: '18px',
    padding: '22px',
    border: '1px solid #d8d2c8',
    boxShadow: '0 16px 42px rgba(35, 42, 52, .085)'
  },

  consentCard: {
    background: '#fff9ed',
    borderRadius: '18px',
    padding: '22px',
    border: '1px solid #e1c38c',
    boxShadow: '0 16px 38px rgba(111, 81, 24, .10)'
  },

  consentIcon: {
    width: '36px',
    height: '36px',
    display: 'grid',
    placeItems: 'center',
    marginBottom: '12px',
    border: '1px solid #ddb96f',
    borderRadius: '10px',
    background: '#f5dfae',
    color: '#75500d',
    fontWeight: 900
  },

  consentTitle: {
    margin: '7px 0 0',
    color: '#2f3948',
    fontSize: '19px',
    fontWeight: 850
  },

  consentDescription: {
    margin: '8px 0 0',
    color: '#76623d',
    fontSize: '13px',
    lineHeight: 1.6
  },

  permissionBox: {
    marginTop: '14px',
    padding: '13px',
    border: '1px solid #e4cfa3',
    borderRadius: '11px',
    background: 'rgba(255, 255, 255, .66)'
  },

  permissionLabel: {
    marginBottom: '6px',
    color: '#87671f',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '9px',
    fontWeight: 800,
    letterSpacing: '.09em',
    textTransform: 'uppercase'
  },

  permissionText: {
    color: '#493c23',
    fontSize: '12px',
    lineHeight: 1.6,
    whiteSpace: 'pre-wrap'
  },

  cardTitle: {
    margin: '8px 0 0',
    color: '#17212f',
    fontSize: '20px',
    lineHeight: 1.25,
    fontWeight: 850,
    letterSpacing: '-.022em'
  },

  cardDescription: {
    margin: '8px 0 16px',
    color: '#6b7482',
    fontSize: '13px',
    lineHeight: 1.6
  },

  savedList: {
    marginTop: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },

  savedRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '14px',
    padding: '12px 13px 12px 16px',
    border: '1px solid #d8d2c8',
    borderRadius: '12px',
    background: '#f7f4ef',
    cursor: 'pointer'
  },

  savedRowName: {
    minWidth: 0,
    overflow: 'hidden',
    color: '#273344',
    fontSize: '13px',
    fontWeight: 800,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  previewSection: {
    marginTop: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },

  previewLabel: {
    color: '#68717e',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '9px',
    fontWeight: 800,
    letterSpacing: '.09em',
    textTransform: 'uppercase'
  },

  detailCard: {
    marginTop: '16px',
    padding: '16px',
    border: '1px solid #d8d2c8',
    borderRadius: '13px',
    background: '#f8f6f2'
  },

  detailValue: {
    marginBottom: '12px',
    color: '#273344',
    fontSize: '13px',
    fontWeight: 750,
    whiteSpace: 'pre-wrap'
  },

  detailsBox: {
    padding: '15px 17px',
    border: '1px solid #d8d2c8',
    borderRadius: '15px',
    background: '#fffdf9',
    boxShadow: '0 12px 32px rgba(35, 42, 52, .07)'
  },

  detailsSummary: {
    cursor: 'pointer',
    color: '#3d495a',
    fontSize: '12px',
    fontWeight: 850
  },

  streamList: {
    marginTop: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    maxHeight: '70vh',
    overflowY: 'auto'
  },

  streamEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '14px',
    border: '1px solid #d8d2c8',
    borderRadius: '12px',
    background: '#f7f4ef'
  },

  streamEntryText: {
    color: '#273344',
    fontSize: '13px',
    lineHeight: 1.65,
    whiteSpace: 'pre-wrap'
  },

  streamEntryNote: {
    color: '#906619',
    fontSize: '11px',
    fontWeight: 700
  },

  screenshotImage: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    border: '1px solid #cfd6dd',
    borderRadius: '10px',
    background: '#0d1724'
  }
}
