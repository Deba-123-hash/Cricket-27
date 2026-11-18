import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Route-based code splitting: Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
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
        <Route path="about" element={<About />} />

        {/* Redirect removed routes gracefully to Home */}
        <Route path="our-game" element={<Navigate to="/" replace />} />
        <Route path="features" element={<Navigate to="/" replace />} />

        {/* Internal / Secondary Routes */}
        <Route path="media" element={<Media />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetails />} />
        <Route path="community" element={<Community />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />

        {/* Design System & Preview */}
        <Route path="brand-preview" element={<BrandPreview />} />
        <Route path="design-system" element={<DesignSystem />} />

        {/* Custom 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
