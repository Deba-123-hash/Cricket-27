import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MediaGallery from '../../src/sections/media/MediaGallery';
import { ToastProvider } from '../../src/context/ToastContext';

describe('Media Gallery & Lightbox Integration (src/sections/media/MediaGallery.jsx)', () => {
  const renderGallery = () =>
    render(
      <ToastProvider>
        <MediaGallery />
      </ToastProvider>
    );

  it('renders media gallery cards and category tab filters', () => {
    renderGallery();

    expect(screen.getByRole('tab', { name: /all media/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /cricket artwork/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /stadium visuals/i })).toBeInTheDocument();
  });

  it('filters gallery items when category tab is clicked', () => {
    renderGallery();

    const stadiumTab = screen.getByRole('tab', { name: /stadium visuals/i });
    fireEvent.click(stadiumTab);

    expect(stadiumTab).toHaveAttribute('aria-selected', 'true');
  });

  it('opens lightbox modal upon clicking an item and closes it', () => {
    renderGallery();

    // Find the first gallery card and click it
    const firstTitle = screen.getByText('Cover Drive Stadium Key Art');
    fireEvent.click(firstTitle);

    // Lightbox dialog should open
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByLabelText(/close image lightbox/i)).toBeInTheDocument();

    // Close lightbox
    const closeBtn = screen.getByLabelText(/close image lightbox/i);
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
