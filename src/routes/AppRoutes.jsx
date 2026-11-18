import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Route-based code splitting: Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const Features = lazy(() => import('../pages/Features'));
const Media = lazy(() => import('../pages/Media'));
const News = lazy(() => import('../pages/News'));
const NewsDetails = lazy(() => import('../pages/NewsDetails'));
const Community = lazy(() => import('../pages/Community'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const BrandPreview = lazy(() => import('../pages/BrandPreview'));
const DesignSystem = lazy(() => import('../pages/DesignSystem'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Core Brand Routes */}
        <Route index element={<Home />} />
        {/* Redirect removed About and Our Game sections */}
        <Route path="about" element={<Navigate to="/" replace />} />
        <Route path="our-game" element={<Navigate to="/features" replace />} />
        <Route path="features" element={<Features />} />
        <Route path="media" element={<Media />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetails />} />
        <Route path="community" element={<Community />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />

        {/* Phase 02 Development Style Guide Preview (Internal) */}
        <Route path="brand-preview" element={<BrandPreview />} />

        {/* Phase 03 UI/UX Design System & Component Showcase */}
        <Route path="design-system" element={<DesignSystem />} />

        {/* Custom 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
