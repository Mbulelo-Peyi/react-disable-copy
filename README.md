# react-disable-copy

A simple React wrapper component that disables copy, cut, and right-click (context menu) across the entire app.

### 💡 Why this exists

This package is built to support micro-charities, nonprofit projects, and social-good platforms by helping protect web content from basic copying.

Created as part of volunteer work with [GoodWorkHub](https://goodworkhub.org) by [Mbulelo Phillip Peyi](https://github.com/Mbulelo-Peyi).

---

## Installation

```bash
npm install react-disable-copy

```
## Usage
```jsx


import React from 'react';
import { DisableCopyWrapper } from 'react-disable-copy';

// Basic (Scoped Protection)

function App() {
  return (
    <DisableCopyWrapper
      disableCopy={true}
      disableCut={true}
      disableContextMenu={true}
      showWarning={true}
      warningMessage="Copying is not allowed on this app."
      isScoped={true}
      wrapperClassName="p-4 bg-gray-100 rounded shadow"
    >
      <YourApp />
    </DisableCopyWrapper>
  );
}



// Global Protection (Entire Document)

import { DisableCopyWrapper } from 'react-disable-copy';

function App() {
  return (
    <DisableCopyWrapper showWarning>
      <YourApp />
    </DisableCopyWrapper>
  );
}


// Custom Warning Handler (No Alert)

import { DisableCopyWrapper } from 'react-disable-copy';

function App() {
  const handleWarn = () => {
    console.warn('Blocked user interaction!');
    // You could also trigger a toast or snackbar here.
  };

  return (
    <DisableCopyWrapper
      showWarning
      onWarn={handleWarn}
      warningMessage="This will be ignored if onWarn is provided."
    >
      <YourApp />
    </DisableCopyWrapper>
  );
}


// No Warnings (Silent Block)

import { DisableCopyWrapper } from 'react-disable-copy';

function App() {
  return (
    <DisableCopyWrapper
      disableCopy
      disableCut
      disableContextMenu
      showWarning={false}
    >
      <YourApp />
    </DisableCopyWrapper>
  );
}


export default App;
```

## Props

| Prop                | Type           | Default                        | Description                                                                 |
|---------------------|----------------|--------------------------------|-----------------------------------------------------------------------------|
| `children`          | `ReactNode`    | *(required)*                   | Elements to wrap.                                                           |
| `disableCopy`       | `boolean`      | `true`                         | Whether to block the `copy` event.                                         |
| `disableCut`        | `boolean`      | `true`                         | Whether to block the `cut` event.                                          |
| `disableContextMenu`| `boolean`      | `true`                         | Whether to block right-click context menu.                                 |
| `showWarning`       | `boolean`      | `false`                        | Whether to show a warning when a blocked action is attempted.              |
| `warningMessage`    | `string`       | `"This action is disabled."`   | Text shown in `alert()` unless `onWarn` is provided.                       |
| `onWarn`            | `() => void`   | `undefined`                    | Custom function to run instead of `alert`. Overrides `warningMessage`.     |
| `isScoped`          | `boolean`      | `false`                        | Restricts protections to the wrapper only, instead of the whole document.  |
| `wrapperClassName`  | `string`       | `undefined`                    | Class name applied to the wrapper when `isScoped` is `true`.               |
