import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../../src/routes/AppRoutes';
import { UIProvider } from '../../src/context/UIContext';
import { ToastProvider } from '../../src/context/ToastContext';

describe('All 10 Website Routes & 404 Routing Integrity', () => {
  const WAIT_OPTS = { timeout: 3500 };

  const renderRoute = (initialPath) => {
    return render(
      <MemoryRouter initialEntries={[initialPath]}>
        <UIProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </UIProvider>
      </MemoryRouter>
    );
  };

  it('renders Route 1: Home (/)', async () => {
    renderRoute('/');
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /cricket27 homepage/i }).length).toBeGreaterThanOrEqual(1);
    }, WAIT_OPTS);
  });

  it('renders Route 2: About (/about)', async () => {
    renderRoute('/about');
    await waitFor(() => {
      expect(screen.getByText(/we are cricket27/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 3: Our Game (/our-game)', async () => {
    renderRoute('/our-game');
    await waitFor(() => {
      expect(screen.getByText(/the next chapter of/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 4: Features (/features)', async () => {
    renderRoute('/features');
    await waitFor(() => {
      expect(screen.getByText(/every detail/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 5: Media (/media)', async () => {
    renderRoute('/media');
    await waitFor(() => {
      expect(screen.getByText(/the world of/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 6: News (/news)', async () => {
    renderRoute('/news');
    await waitFor(() => {
      expect(screen.getByText(/news\. stories\./i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 7: News Details (/news/the-vision-behind-cricket27)', async () => {
    renderRoute('/news/the-vision-behind-cricket27');
    await waitFor(() => {
      expect(screen.getAllByText(/the vision behind cricket27/i).length).toBeGreaterThanOrEqual(1);
    }, WAIT_OPTS);
  });

  it('renders Route 8: Community (/community)', async () => {
    renderRoute('/community');
    await waitFor(() => {
      expect(screen.getByText(/one game\. one passion\./i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 9: FAQ (/faq)', async () => {
    renderRoute('/faq');
    await waitFor(() => {
      expect(screen.getByText(/got questions\?/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Route 10: Contact (/contact)', async () => {
    renderRoute('/contact');
    await waitFor(() => {
      expect(screen.getByText(/let's start a/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });

  it('renders Custom 404 Route on unknown path (/unknown-trajectory)', async () => {
    renderRoute('/unknown-trajectory');
    await waitFor(() => {
      expect(screen.getByText(/out of crease/i)).toBeInTheDocument();
    }, WAIT_OPTS);
  });
});
