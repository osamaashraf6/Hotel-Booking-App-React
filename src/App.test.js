import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const divElement = screen.getByText(/hello world/i);
  expect(divElement).toBeInTheDocument();
});
