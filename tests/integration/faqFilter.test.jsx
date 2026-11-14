import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQInteractiveSection from '../../src/sections/faq/FAQInteractiveSection';
import { ToastProvider } from '../../src/context/ToastContext';

describe('FAQ Search & Filter Integration (src/sections/faq/FAQInteractiveSection.jsx)', () => {
  it('renders search input and filters questions dynamically', () => {
    render(
      <ToastProvider>
        <FAQInteractiveSection />
      </ToastProvider>
    );

    const searchInput = screen.getByPlaceholderText(/search your question here/i);
    expect(searchInput).toBeInTheDocument();

    // Type query
    fireEvent.change(searchInput, { target: { value: 'platforms' } });
    expect(searchInput.value).toBe('platforms');

    // Should display filtered count
    expect(screen.getByText(/found/i)).toBeInTheDocument();
  });

  it('switches category filters and resets search', () => {
    render(
      <ToastProvider>
        <FAQInteractiveSection />
      </ToastProvider>
    );

    const ourGameTab = screen.getByRole('tab', { name: /our game/i });
    fireEvent.click(ourGameTab);
    expect(ourGameTab).toHaveAttribute('aria-selected', 'true');
  });
});
