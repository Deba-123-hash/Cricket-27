import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Route-based code splitting: Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const OurGame = lazy(() => import('../pages/OurGame'));
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
        <Route path="about" element={<About />} />
        <Route path="our-game" element={<OurGame />} />
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
