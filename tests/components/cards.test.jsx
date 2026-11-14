import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsCard from '../../src/components/cards/NewsCard';
import FeatureCard from '../../src/components/cards/FeatureCard';

describe('Card Components (src/components/cards/)', () => {
  describe('NewsCard', () => {
    const mockArticle = {
      id: '1',
      slug: 'the-vision-behind-cricket27',
      title: 'The Vision Behind CRICKET27',
      date: '2026-03-15',
      category: 'Design Philosophy',
      readTime: '4 min read',
      excerpt: 'Explore how CRICKET27 balances accessibility with tactical depth.',
      image: '/assets/news/vision-behind-cricket27.jpg',
      featured: true,
    };

    it('renders article title, category badge, and excerpt', () => {
      render(
        <BrowserRouter>
          <NewsCard article={mockArticle} />
        </BrowserRouter>
      );

      expect(screen.getByText('The Vision Behind CRICKET27')).toBeInTheDocument();
      expect(screen.getByText('Design Philosophy')).toBeInTheDocument();
      expect(screen.getByText(/explore how cricket27 balances/i)).toBeInTheDocument();
      expect(screen.getByText('4 min read')).toBeInTheDocument();

      const link = screen.getByRole('link', { name: /read full story/i });
      expect(link).toHaveAttribute('href', '/news/the-vision-behind-cricket27');
    });
  });

  describe('FeatureCard', () => {
    const mockFeature = {
      title: 'Precision Batting Engine',
      category: 'Gameplay',
      summary: 'Millisecond bat swing timing mechanics.',
      badge: 'FEATURED',
      iconName: 'Crosshair',
      highlight: true,
      image: '/assets/features/batting/batting-main.jpg',
    };

    it('renders feature card heading and link to features page', () => {
      render(
        <BrowserRouter>
          <FeatureCard feature={mockFeature} to="/features" />
        </BrowserRouter>
      );

      expect(screen.getByText('Precision Batting Engine')).toBeInTheDocument();
      expect(screen.getByText('FEATURED')).toBeInTheDocument();
      expect(screen.getByText('Millisecond bat swing timing mechanics.')).toBeInTheDocument();

      const link = screen.getByRole('link', { name: /explore precision batting engine details/i });
      expect(link).toHaveAttribute('href', '/features');
    });

    it('handles image error and falls back gracefully without breaking', () => {
      const brokenFeature = {
        ...mockFeature,
        image: '/assets/features/non-existent-image.jpg',
      };

      const { container } = render(
        <BrowserRouter>
          <FeatureCard feature={brokenFeature} to="/features" />
        </BrowserRouter>
      );

      // Trigger error on image
      const img = container.querySelector('img');
      if (img) {
        img.dispatchEvent(new window.Event('error'));
      }

      // Feature content remains intact and accessible
      expect(screen.getByText('Precision Batting Engine')).toBeInTheDocument();
      expect(screen.getByText('FEATURED')).toBeInTheDocument();
    });
  });
});
