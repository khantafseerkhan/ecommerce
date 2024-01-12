import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Products from './Products';

describe('Products Component', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

  it('renders products correctly', async () => {
    render(<Products />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2); // Assuming two API calls in useEffect
    });

    expect(screen.getByText(/Filters/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });

});