/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Presentation-only CSS for the Agent 2 evidence panel. Rendered once by
 * Agent2Panel inside a <style> tag; every class is namespaced under
 * .relay-evidence so it cannot leak into the rest of the workbench.
 */
export const agent2EvidenceCss = `
  .relay-evidence {
    position: relative;
    overflow: hidden;
    width: 100%;
    border: 1px solid #233448;
    border-radius: 20px;
    background: #0d1724;
    color: #e8eef5;
    box-shadow:
      0 28px 70px rgba(17, 29, 43, .22);
  }

  .relay-evidence::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background:
      repeating-linear-gradient(
        90deg,
        #20a6a5 0 84px,
        transparent 84px 94px,
        #d06c3e 94px 178px,
        transparent 178px 188px
      );
  }

  .relay-evidence__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 25px 26px 21px;
    border-bottom: 1px solid #25384c;
  }

  .relay-evidence__kicker {
    color: #65d6d2;
    font-family: Consolas, Monaco, monospace;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .relay-evidence__title {
    margin: 8px 0 0;
    color: #f4f7fa;
    font-size: 25px;
    line-height: 1.15;
    font-weight: 850;
    letter-spacing: -.025em;
  }

  .relay-evidence__description {
    max-width: 720px;
    margin: 8px 0 0;
    color: #9dacbd;
    font-size: 13px;
    line-height: 1.6;
  }

  .relay-evidence__actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .relay-evidence__status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    padding: 8px 12px;
    border: 1px solid #31566a;
    border-radius: 9px;
    background: #122438;
    color: #cfe8e7;
    font-family: Consolas, Monaco, monospace;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .05em;
    text-transform: uppercase;
  }

  .relay-evidence__status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #37bda9;
    box-shadow: 0 0 0 5px rgba(55, 189, 169, .11);
  }

  .relay-evidence__status--live
  .relay-evidence__status-dot {
    animation: relay-evidence-pulse 1.7s ease-out infinite;
  }

  @keyframes relay-evidence-pulse {
    0% { box-shadow: 0 0 0 0 rgba(55, 189, 169, .34); }
    70% { box-shadow: 0 0 0 10px rgba(55, 189, 169, 0); }
    100% { box-shadow: 0 0 0 0 rgba(55, 189, 169, 0); }
  }

  .relay-evidence__clear,
  .relay-evidence__button {
    min-height: 38px;
    border-radius: 9px;
    padding: 8px 12px;
    font: inherit;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: transform 160ms ease, background 160ms ease;
  }

  .relay-evidence__clear {
    border: 1px solid #3a4d61;
    background: #182536;
    color: #d8e1eb;
  }

  .relay-evidence__button {
    border: 1px solid #238e91;
    background: #1d7f83;
    color: #ffffff;
  }

  .relay-evidence__clear:hover,
  .relay-evidence__button:hover {
    transform: translateY(-1px);
  }

  .relay-evidence__auth {
    margin: 18px 26px 0;
    padding: 16px;
    border: 1px solid #735a2e;
    border-radius: 13px;
    background: #241f18;
  }

  .relay-evidence__auth-title {
    margin: 0;
    color: #f2d99e;
    font-size: 14px;
    font-weight: 850;
  }

  .relay-evidence__auth-copy {
    margin: 6px 0 13px;
    color: #c4af80;
    font-size: 12px;
    line-height: 1.55;
  }

  .relay-evidence__auth-actions,
  .relay-evidence__code-row {
    display: flex;
    gap: 9px;
    align-items: center;
    flex-wrap: wrap;
  }

  .relay-evidence__code-label {
    display: block;
    margin: 14px 0 7px;
    color: #b9c5d1;
    font-size: 11px;
    font-weight: 800;
  }

  .relay-evidence__code {
    min-width: 0;
    flex: 1;
    border: 1px solid #46576a;
    border-radius: 9px;
    padding: 9px 11px;
    background: #101c2a;
    color: #eef4f9;
    outline: none;
  }

  .relay-evidence__summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 150px 150px;
    gap: 10px;
    padding: 17px 26px;
    border-bottom: 1px solid #25384c;
    background: #101c2a;
  }

  .relay-evidence__run,
  .relay-evidence__metric {
    border: 1px solid #2b3e52;
    border-radius: 12px;
    background: #142133;
  }

  .relay-evidence__run {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 12px 14px;
  }

  .relay-evidence__run-mark {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border: 1px solid #2e6b72;
    border-radius: 9px;
    background: #15313b;
    color: #70d8d4;
    font-family: Consolas, Monaco, monospace;
    font-size: 10px;
    font-weight: 900;
  }

  .relay-evidence__run-name {
    overflow: hidden;
    color: #eef3f8;
    font-size: 13px;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .relay-evidence__run-sub {
    margin-top: 4px;
    color: #8293a5;
    font-size: 10px;
  }

  .relay-evidence__metric {
    padding: 12px 14px;
  }

  .relay-evidence__metric-value {
    color: #f0f5f9;
    font-family: Consolas, Monaco, monospace;
    font-size: 22px;
    font-weight: 900;
  }

  .relay-evidence__metric-label {
    margin-top: 4px;
    color: #7e90a3;
    font-family: Consolas, Monaco, monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .relay-evidence__stream {
    max-height: 74vh;
    overflow-y: auto;
    padding: 24px 26px 30px;
    scroll-behavior: smooth;
  }

  .relay-evidence__stream::-webkit-scrollbar { width: 10px; }
  .relay-evidence__stream::-webkit-scrollbar-track { background: transparent; }
  .relay-evidence__stream::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 999px;
    background: #435466;
    background-clip: padding-box;
  }

  .relay-evidence__empty {
    display: grid;
    place-items: center;
    min-height: 330px;
    border: 1px dashed #344a60;
    border-radius: 15px;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 31px,
        rgba(124, 154, 181, .04) 32px
      ),
      #101b29;
    padding: 30px;
    text-align: center;
  }

  .relay-evidence__empty-mark {
    position: relative;
    width: 58px;
    height: 58px;
    margin: 0 auto 16px;
    border: 1px solid #355268;
    border-radius: 50%;
  }

  .relay-evidence__empty-mark::before,
  .relay-evidence__empty-mark::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  .relay-evidence__empty-mark::before {
    inset: 12px;
    border: 1px solid #284052;
  }

  .relay-evidence__empty-mark::after {
    width: 9px;
    height: 9px;
    top: 24px;
    left: 24px;
    background: #32b7b7;
  }

  .relay-evidence__empty-title {
    color: #e7edf3;
    font-size: 16px;
    font-weight: 850;
  }

  .relay-evidence__empty-copy {
    max-width: 520px;
    margin: 7px auto 0;
    color: #8798aa;
    font-size: 13px;
    line-height: 1.6;
  }

  .relay-evidence__entry {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 13px;
  }

  .relay-evidence__entry + .relay-evidence__entry {
    margin-top: 18px;
  }

  .relay-evidence__rail {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .relay-evidence__entry:not(:last-child)
  .relay-evidence__rail::after {
    content: "";
    position: absolute;
    top: 37px;
    bottom: -25px;
    width: 1px;
    background: #31475b;
  }

  .relay-evidence__number {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid #326d73;
    border-radius: 9px;
    background: #12303a;
    color: #6ad3d0;
    font-family: Consolas, Monaco, monospace;
    font-size: 10px;
    font-weight: 900;
  }

  .relay-evidence__entry-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid #2a3c50;
    border-radius: 14px;
    background: #121f2f;
  }

  .relay-evidence__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 13px;
    border-bottom: 1px solid #293b4e;
    background: #152335;
  }

  .relay-evidence__type,
  .relay-evidence__time {
    font-family: Consolas, Monaco, monospace;
    font-size: 9px;
  }

  .relay-evidence__type {
    color: #8bd6d4;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .relay-evidence__time {
    color: #74879b;
  }

  .relay-evidence__text {
    padding: 14px 15px;
    color: #d9e2eb;
    font-size: 13px;
    line-height: 1.65;
    white-space: pre-wrap;
  }

  .relay-evidence__frame {
    margin: 0 15px 15px;
    overflow: hidden;
    border: 1px solid #35485b;
    border-radius: 11px;
    background: #07101a;
  }

  .relay-evidence__frame-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 9px 11px;
    border-bottom: 1px solid #304255;
    background: #0b1521;
  }

  .relay-evidence__frame-label {
    color: #9fb0c0;
    font-family: Consolas, Monaco, monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .relay-evidence__expand {
    border: 1px solid #364d62;
    border-radius: 7px;
    padding: 5px 8px;
    background: #17283a;
    color: #dce5ee;
    font: inherit;
    font-size: 10px;
    font-weight: 800;
    cursor: pointer;
  }

  .relay-evidence__image-button {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: #07101a;
    cursor: zoom-in;
  }

  .relay-evidence__image {
    display: block;
    width: 100%;
    height: auto;
    min-height: 260px;
    object-fit: contain;
    background: #07101a;
  }

  .relay-evidence__pending {
    margin: 0 15px 15px;
    padding: 10px 12px;
    border: 1px solid #70582c;
    border-radius: 9px;
    background: #241f17;
    color: #d7bd82;
    font-size: 11px;
  }

  .relay-evidence__preview {
    position: fixed;
    z-index: 9999;
    inset: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    background: rgba(4, 9, 15, .96);
    backdrop-filter: blur(8px);
  }

  .relay-evidence__preview-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 20px;
    border-bottom: 1px solid #283b4e;
    color: #dfe8f0;
    background: #0b1622;
  }

  .relay-evidence__preview-title {
    font-family: Consolas, Monaco, monospace;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .relay-evidence__preview-close {
    border: 1px solid #405468;
    border-radius: 8px;
    padding: 7px 11px;
    background: #16283a;
    color: #ffffff;
    font: inherit;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
  }

  .relay-evidence__preview-body {
    min-height: 0;
    display: grid;
    place-items: center;
    overflow: auto;
    padding: 22px;
  }

  .relay-evidence__preview-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    box-shadow: 0 28px 80px rgba(0, 0, 0, .5);
  }

  @media (max-width: 760px) {
    .relay-evidence__header {
      flex-direction: column;
    }

    .relay-evidence__summary {
      grid-template-columns: 1fr 1fr;
    }

    .relay-evidence__run {
      grid-column: 1 / -1;
    }

    .relay-evidence__stream {
      padding: 20px 14px 24px;
    }

    .relay-evidence__entry {
      grid-template-columns: 29px minmax(0, 1fr);
      gap: 8px;
    }

    .relay-evidence__number {
      width: 27px;
      height: 27px;
    }

    .relay-evidence__image {
      min-height: 170px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .relay-evidence__status--live
    .relay-evidence__status-dot {
      animation: none;
    }
  }
`
