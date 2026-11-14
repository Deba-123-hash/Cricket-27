import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../../src/components/common/Button';
import Badge from '../../src/components/common/Badge';
import Loader from '../../src/components/common/Loader';
import Breadcrumb from '../../src/components/common/Breadcrumb';

describe('Common UI Components (src/components/common/)', () => {
  describe('Button', () => {
    it('renders with children text and default primary classes', () => {
      render(<Button>Click Me</Button>);
      const btn = screen.getByRole('button', { name: /click me/i });
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass('bg-lime');
    });

    it('handles onClick callback', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Submit</Button>);
      const btn = screen.getByRole('button', { name: /submit/i });
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders disabled state properly', () => {
      const handleClick = vi.fn();
      render(<Button disabled onClick={handleClick}>Disabled</Button>);
      const btn = screen.getByRole('button', { name: /disabled/i });
      expect(btn).toBeDisabled();
      fireEvent.click(btn);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders as a React Router Link when "to" prop is passed', () => {
      render(
        <BrowserRouter>
          <Button to="/features">Explore Features</Button>
        </BrowserRouter>
      );
      const link = screen.getByRole('link', { name: /explore features/i });
      expect(link).toHaveAttribute('href', '/features');
    });
  });

  describe('Badge', () => {
    it('renders badge text and variant classes', () => {
      render(<Badge variant="lime">CONCEPT</Badge>);
      const badge = screen.getByText('CONCEPT');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-lime/10');
    });

    it('supports coral variant for alerts', () => {
      render(<Badge variant="coral">URGENT</Badge>);
      const badge = screen.getByText('URGENT');
      expect(badge).toHaveClass('bg-coral/10');
    });
  });

  describe('Loader', () => {
    it('renders accessible loading text and status role', () => {
      render(<Loader text="CONNECTING STADIUM..." />);
      const status = screen.getByRole('status');
      expect(status).toBeInTheDocument();
      expect(screen.getByText('CONNECTING STADIUM...')).toBeInTheDocument();
    });
  });

  describe('Breadcrumb', () => {
    it('renders breadcrumb items and navigation landmark', () => {
      const items = [
        { label: 'Home', path: '/' },
        { label: 'News', path: '/news' },
        { label: 'Article' },
      ];
      render(
        <BrowserRouter>
          <Breadcrumb items={items} />
        </BrowserRouter>
      );
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      expect(nav).toBeInTheDocument();
      expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
      expect(screen.getByText('News')).toBeInTheDocument();
      expect(screen.getByText('Article')).toBeInTheDocument();
    });
  });
});
