# react-disable-copy

A simple React wrapper component that disables copy, cut, and right-click (context menu) across the entire app.

### 💡 Why this exists

This package is built to support micro-charities, nonprofit projects, and social-good platforms by helping protect web content from basic copying.

Created as part of volunteer work with [GoodWorkHub](https://goodworkhub.org) by [Mbulelo Phillip Peyi](https://github.com/Mbulelo-Peyi).

---

## Installation & Usage

```bash
npm install react-disable-copy



```jsx

import DisableCopyWrapper from 'react-disable-copy';

function App() {
  return (
    <DisableCopyWrapper>
      <YourApp />
    </DisableCopyWrapper>
  );
}
