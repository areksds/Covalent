import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Confirm build', () => {
  const { testBuild } = render(<App />);
});
