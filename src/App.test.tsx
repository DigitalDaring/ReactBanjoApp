import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banjo content', () => {
  render(<App />);
  const linkElement = screen.getByText(/banjo/i);
  expect(linkElement).toBeInTheDocument();
});
