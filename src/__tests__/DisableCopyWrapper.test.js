import React from 'react';
import { render } from '@testing-library/react';
import DisableCopyWrapper from '../index';

describe('DisableCopyWrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <DisableCopyWrapper>
        <div>Hello World</div>
      </DisableCopyWrapper>
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
