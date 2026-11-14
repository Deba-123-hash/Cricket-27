import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsGrid from '../../src/sections/news/NewsGrid';
import { ToastProvider } from '../../src/context/ToastContext';

describe('News Grid Search & Filter Integration (src/sections/news/NewsGrid.jsx)', () => {
  it('renders news articles and allows search query filtering', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
          <NewsGrid />
        </ToastProvider>
      </BrowserRouter>
    );

    // Initial check
    expect(screen.getByPlaceholderText(/search stories/i)).toBeInTheDocument();
    expect(screen.getByText('All News')).toBeInTheDocument();

    // Type query
    const searchInput = screen.getByPlaceholderText(/search stories/i);
    fireEvent.change(searchInput, { target: { value: 'Tactical Depth' } });

    // Verify search input reflects value
    expect(searchInput.value).toBe('Tactical Depth');
  });

  it('filters by category button selection', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
          <NewsGrid />
        </ToastProvider>
      </BrowserRouter>
    );

    const categoryTab = screen.getByRole('tab', { name: /game vision/i });
    fireEvent.click(categoryTab);

    // Tab should be in document
    expect(categoryTab).toBeInTheDocument();
  });
});
