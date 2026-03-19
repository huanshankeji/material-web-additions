/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/icon/icon.js';
import '@maicol07/material-web-additions/top-app-bar/center-aligned-top-app-bar.js';
import '@maicol07/material-web-additions/top-app-bar/small-top-app-bar.js';
import '@maicol07/material-web-additions/top-app-bar/medium-top-app-bar.js';
import '@maicol07/material-web-additions/top-app-bar/large-top-app-bar.js';

import {MaterialStoryInit} from '~catalog/stories/material-collection.js';
import {css, html} from 'lit';

/** Knob types for button stories. */
export interface StoryKnobs {
  /** Whether the top app bar is open. */
  sticky: boolean;
}


const centerAlignedTopAppBar: MaterialStoryInit<StoryKnobs> = {
  name: 'Center Aligned Top App Bar',
  render({sticky}) {
    return html`
      <md-center-aligned-top-app-bar sticky="${sticky}">
        <span slot="start">
          <md-icon>menu</md-icon>
        </span>
        <span>Title</span>
        <span slot="end">
          <md-icon>search</md-icon>
        </span>
      </md-center-aligned-top-app-bar>
    `;
  }
};
const smallTopAppBar: MaterialStoryInit<StoryKnobs> = {
  name: 'Small Top App Bar',
  render({sticky}) {
    return html`
      <md-small-top-app-bar sticky="${sticky}">
        <span slot="start">
          <md-icon>menu</md-icon>
        </span>
        <span>Title</span>
        <span slot="end">
          <md-icon>search</md-icon>
        </span>
      </md-small-top-app-bar>
    `;
  }
};

const mediumTopAppBar: MaterialStoryInit<StoryKnobs> = {
  name: 'Medium Top App Bar',
  render({sticky}) {
    return html`
      <md-medium-top-app-bar sticky="${sticky}">
        <span slot="start">
          <md-icon>menu</md-icon>
        </span>
        <span>Title</span>
        <span slot="end">
          <md-icon>search</md-icon>
        </span>
      </md-medium-top-app-bar>
    `;
  }
};

const largeTopAppBar: MaterialStoryInit<StoryKnobs> = {
  name: 'Large Top App Bar',
  render({sticky}) {
    return html`
      <md-large-top-app-bar sticky="${sticky}">
        <span slot="start">
          <md-icon>menu</md-icon>
        </span>
        <span>Title</span>
        <span slot="end">
          <md-icon>search</md-icon>
        </span>
      </md-large-top-app-bar>
    `;
  }
};

/**
 * Reproduces the overflow bug: without `box-sizing: border-box`, the top app
 * bar's total width would be `100% + 32px` (16px padding each side), causing
 * a horizontal scrollbar in the container below. With the fix applied this
 * bar fits exactly within the container.
 */
const inContainerOverflowFix: MaterialStoryInit<StoryKnobs> = {
  name: 'In Container (overflow fix)',
  styles: css`
    .container {
      width: 360px;
      overflow: auto;
      border: 2px dashed var(--md-sys-color-outline, #79747e);
    }
  `,
  render({sticky}) {
    return html`
      <div class="container">
        <md-small-top-app-bar sticky="${sticky}">
          <span slot="start">
            <md-icon>menu</md-icon>
          </span>
          <span>Title</span>
          <span slot="end">
            <md-icon>search</md-icon>
          </span>
        </md-small-top-app-bar>
      </div>
    `;
  }
};

/** Button stories. */
export const stories = [centerAlignedTopAppBar, smallTopAppBar, mediumTopAppBar, largeTopAppBar, inContainerOverflowFix];
