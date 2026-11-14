import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { APP_CONFIG } from '../../utils/constants';

/**
 * Helper to update or create a <meta> element in document.head
 */
const setMetaTag = (attributeName, attributeValue, content) => {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Helper to update or create a <link> element in document.head
 */
const setLinkTag = (rel, href) => {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

/**
 * CRICKET27 — Reusable Dynamic SEO & Structured Data Component
 * Phase 22 Advanced SEO, Accessibility & Browser Compatibility
 */
export const SEO = ({
  title,
  description = APP_CONFIG.DESCRIPTION,
  canonical,
  ogType = 'website',
  ogImage = APP_CONFIG.DEFAULT_OG_IMAGE,
  twitterCard = 'summary_large_image',
  article = null,
  schema = null,
}) => {
  useEffect(() => {
    // 1. Format document title
    const fullTitle = title
      ? title.includes(APP_CONFIG.BRAND_NAME)
        ? title
        : `${title} | ${APP_CONFIG.BRAND_NAME}`
      : `${APP_CONFIG.BRAND_NAME} | ${APP_CONFIG.TAGLINE}`;

    const previousTitle = document.title;
    document.title = fullTitle;

    // 2. Canonical URL resolution
    const baseUrl = APP_CONFIG.SITE_URL.replace(/\/$/, '');
    let canonicalUrl = baseUrl;
    if (canonical) {
      canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`;
    } else {
      canonicalUrl = `${baseUrl}${window.location.pathname}`;
    }

    // 3. Image URL resolution
    let fullImageUrl = ogImage;
    if (ogImage && !ogImage.startsWith('http')) {
      fullImageUrl = `${baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
    }

    // 4. Standard On-Page Meta Tags
    setMetaTag('name', 'description', description);
    setLinkTag('canonical', canonicalUrl);

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', APP_CONFIG.BRAND_NAME);
    setMetaTag('property', 'og:locale', 'en_US');

    // Article specific Open Graph tags
    if (article) {
      if (article.publishedTime) {
        setMetaTag('property', 'article:published_time', article.publishedTime);
      }
      if (article.modifiedTime) {
        setMetaTag('property', 'article:modified_time', article.modifiedTime);
      }
      if (article.author) {
        setMetaTag('property', 'article:author', article.author);
      }
      if (Array.isArray(article.tags)) {
        article.tags.forEach((tag) => setMetaTag('property', 'article:tag', tag));
      }
    }

    // 6. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:site', '@cricket27game');
    setMetaTag('name', 'twitter:creator', '@cricket27game');

    // 7. Structured Data (JSON-LD) Injection
    let defaultSchema = null;

    if (schema) {
      defaultSchema = schema;
    } else if (article) {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: fullTitle,
        description,
        image: [fullImageUrl],
        datePublished: article.publishedTime || new Date().toISOString(),
        dateModified: article.modifiedTime || article.publishedTime || new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: article.author || 'CRICKET27 Editorial Team',
        },
        publisher: {
          '@type': 'Organization',
          name: APP_CONFIG.BRAND_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/assets/branding/logo/cricket27-logo.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      };
    } else {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': ogType === 'website' && canonicalUrl === baseUrl ? 'WebSite' : 'WebPage',
        name: fullTitle,
        description,
        url: canonicalUrl,
        publisher: {
          '@type': 'Organization',
          name: APP_CONFIG.BRAND_NAME,
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/assets/branding/logo/cricket27-logo.svg`,
          },
        },
      };
    }

    let scriptTag = document.getElementById('cricket27-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'cricket27-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(defaultSchema);

    // Cleanup on unmount or route change
    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical, ogType, ogImage, twitterCard, article, schema]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  twitterCard: PropTypes.string,
  article: PropTypes.shape({
    publishedTime: PropTypes.string,
    modifiedTime: PropTypes.string,
    author: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  schema: PropTypes.object,
};

export default SEO;
