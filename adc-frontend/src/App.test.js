import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Avramenko Development Company/i); // find the text on the screen
  expect(linkElement).toBeInTheDocument(); // test will be passed if the text is shown on the screen
});
