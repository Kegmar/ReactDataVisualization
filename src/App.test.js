import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Interactive Dashboard For DataVisualization/i);
  expect(titleElement).toBeInTheDocument();
});