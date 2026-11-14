import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FAQAccordion from '../../src/sections/faq/FAQAccordion';
import Lightbox from '../../src/components/gallery/Lightbox';
import Navbar from '../../src/components/navigation/Navbar';
import { UIProvider } from '../../src/context/UIContext';
import { ToastProvider } from '../../src/context/ToastContext';

describe('Interactive UI Components & Navigation', () => {
  describe('FAQAccordion', () => {
    const mockFaqItems = [
      {
        id: 'faq-1',
        category: 'Brand & Vision',
        question: 'What is CRICKET27?',
        answer: 'CRICKET27 is a next-generation 2D cricket gaming brand.',
        tags: ['cricket', 'brand'],
      },
      {
        id: 'faq-2',
        category: 'Gameplay',
        question: 'What platforms will CRICKET27 support?',
        answer: 'Planned for PC, mobile, and modern console browsers.',
        tags: ['platforms'],
      },
    ];

    it('expands first item by default and toggles on click', () => {
      render(<FAQAccordion items={mockFaqItems} />);

      const firstBtn = screen.getByRole('button', { name: /what is cricket27\?/i });
      expect(firstBtn).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('CRICKET27 is a next-generation 2D cricket gaming brand.')).toBeInTheDocument();

      const secondBtn = screen.getByRole('button', { name: /what platforms will cricket27 support\?/i });
      expect(secondBtn).toHaveAttribute('aria-expanded', 'false');

      // Click second item
      fireEvent.click(secondBtn);
      expect(secondBtn).toHaveAttribute('aria-expanded', 'true');
      expect(firstBtn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Lightbox', () => {
    const mockItem = {
      id: 'img-1',
      title: 'Stadium Atmosphere Cover Drive',
      src: '/assets/hero/cricket27-home-hero.webp',
      category: 'Concept Art',
      description: 'Floodlit cricket stadium match atmosphere.',
      dimensions: '3840 x 2160',
    };

    it('renders modal dialog and responds to keyboard arrow and escape keys', () => {
      const handleClose = vi.fn();
      const handleNext = vi.fn();
      const handlePrev = vi.fn();

      render(
        <ToastProvider>
          <Lightbox
            item={mockItem}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={0}
            totalCount={5}
          />
        </ToastProvider>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      expect(screen.getByText('Stadium Atmosphere Cover Drive')).toBeInTheDocument();

      // Right arrow
      fireEvent.keyDown(window, { key: 'ArrowRight' });
      expect(handleNext).toHaveBeenCalledTimes(1);

      // Left arrow
      fireEvent.keyDown(window, { key: 'ArrowLeft' });
      expect(handlePrev).toHaveBeenCalledTimes(1);

      // Escape key
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Navbar', () => {
    it('renders global navigation landmarks, links, and contact CTA', () => {
      render(
        <BrowserRouter>
          <UIProvider>
            <ToastProvider>
              <Navbar />
            </ToastProvider>
          </UIProvider>
        </BrowserRouter>
      );

      expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /cricket27 homepage/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /open navigation drawer/i })).toBeInTheDocument();
    });
  });
});
