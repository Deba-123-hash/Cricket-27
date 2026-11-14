# CRICKET27 — Frontend Service Layer & Future Backend Architecture

> **Brand**: CRICKET27  
> **Tagline**: BEYOND THE BOUNDARY.  
> **Phase**: Phase 20 — Advanced Component Architecture & Frontend State Management  
> **Status**: Architectural Specification & Implementation Blueprint

---

## 1. Architectural Overview

CRICKET27 is architected as an API-agnostic frontend client. In Phase 20, all domain data originates from deterministic in-memory data structures located in `src/data/`. This document outlines the formal boundary between the React UI layer and future backend services (such as Node.js/Express, Python/FastAPI, Go, Firebase, or Supabase).

### Data Flow Diagram

```
+-------------------------------------------------------------------+
|                        React UI Layer                             |
|    (Pages, Sections, Components, Custom Hooks, Form Primitives)   |
+---------------------------------+---------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                      Domain Service Layer                         |
|     (newsService, contactService, mediaService, communityService)  |
+---------------------------------+---------------------------------+
                                  |
                +-----------------+-----------------+
                | (VITE_USE_MOCKS === 'true')       | (VITE_USE_MOCKS === 'false')
                v                                   v
+-------------------------------+   +-------------------------------+
|      Static Mock Adapter      |   |       API Transport Layer     |
|   (Deterministic data from    |   |     (Axios / Fetch Client     |
|         `src/data/`)          |   |  Interceptors, Auth & Retry)  |
+-------------------------------+   +---------------+---------------+
                                                    |
                                                    v
                                    +-------------------------------+
                                    |     External Backend API      |
                                    |     (REST / GraphQL Server)   |
                                    +-------------------------------+
```

---

## 2. Proposed Service Directory Layout

When backend integration is introduced, the `src/services/` directory will house dedicated domain services:

```
src/services/
├── api.js                # Core HTTP client with interceptors & base config
├── newsService.js        # Articles, editorial categories, search, slug lookup
├── contactService.js     # Inquiry submissions, feedback, contact types
├── mediaService.js       # Wallpapers, concept art, audio/video streaming, downloads
├── communityService.js   # Community platform stats, social hubs, events
├── configService.js      # App versioning, remote feature flags, maintenance mode
└── mappers/              # DTO (Data Transfer Object) transformers
    ├── newsMapper.js
    ├── contactMapper.js
    └── mediaMapper.js
```

---

## 3. Core API Client Specification (`api.js`)

The `api.js` module provides an abstraction over browser `fetch` or `axios` with global error trapping, authentication header injection, timeout handling, and cancellation tokens.

```javascript
/**
 * Example future implementation of src/services/api.js
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.cricket27.com/v1';
const REQUEST_TIMEOUT_MS = 10000;

export class ApiError extends Error {
  constructor(message, status, code, details = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export async function request(endpoint, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...options.headers,
  };

  // Attach auth token if available in session
  const token = sessionStorage.getItem('c27_auth_token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const payload = await response.json();

    if (!response.ok) {
      throw new ApiError(
        payload.error?.message || 'An unexpected server error occurred.',
        response.status,
        payload.error?.code || 'UNKNOWN_SERVER_ERROR',
        payload.error?.details
      );
    }

    return payload.data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new ApiError('Request timed out. Please check your network connection.', 408, 'REQUEST_TIMEOUT');
    }
    throw error;
  }
}
```

---

## 4. Domain Service Interfaces

### 4.1 News Service (`newsService.js`)

```javascript
export const newsService = {
  /**
   * Fetches paginated news articles with category filtering and keyword search
   */
  async getArticles({ page = 1, limit = 9, category = 'all', query = '' } = {}) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      // In-memory fallback from src/data/news.js
      return mockGetArticles({ page, limit, category, query });
    }
    return request(`/news?page=${page}&limit=${limit}&category=${category}&q=${encodeURIComponent(query)}`);
  },

  /**
   * Fetches single article by URL slug
   */
  async getArticleBySlug(slug) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return mockGetArticleBySlug(slug);
    }
    return request(`/news/${encodeURIComponent(slug)}`);
  },

  /**
   * Fetches featured articles for homepage / news hero
   */
  async getFeaturedArticles() {
    return request('/news/featured');
  },
};
```

### 4.2 Contact Service (`contactService.js`)

```javascript
export const contactService = {
  /**
   * Submits a user inquiry form
   * Payload validated via src/utils/validators.js before submission
   */
  async submitInquiry(inquiryData) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      // Deterministic simulation
      await new Promise((res) => setTimeout(res, 500));
      return { success: true, referenceId: `C27-INQ-${Date.now()}` };
    }
    return request('/contact/inquiries', {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  },

  /**
   * Subscribes an email to the promotional news dispatch
   */
  async subscribeNewsletter(email) {
    return request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};
```

---

## 5. DTO Mapping & Adapter Pattern

To prevent changes in backend database column names from breaking React UI components, the Service Layer uses Data Transfer Object (DTO) mappers:

```javascript
// Example: src/services/mappers/newsMapper.js

/**
 * Transforms a raw backend API payload into the UI's expected article shape
 */
export function mapArticleDTOToUI(dto) {
  return {
    id: dto.article_id || dto.id,
    slug: dto.slug_url || dto.slug,
    title: dto.headline || dto.title,
    excerpt: dto.summary || dto.excerpt,
    content: dto.body_markdown || dto.content,
    category: dto.category_name || dto.category,
    date: dto.published_at ? new Date(dto.published_at).toLocaleDateString() : dto.date,
    readTime: `${dto.estimated_reading_minutes || 4} min read`,
    author: {
      name: dto.author_display_name || dto.author?.name || 'CRICKET27 Editorial Team',
      role: dto.author_title || dto.author?.role || 'Staff Writer',
      avatar: dto.author_avatar_url || dto.author?.avatar,
    },
    image: dto.hero_image_url || dto.image,
    featured: Boolean(dto.is_featured),
  };
}
```

---

## 6. Standard Error & Response Envelopes

All future backend REST endpoints must adhere to standard JSON response envelopes:

### Success Response Envelope
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 9,
    "total": 42,
    "totalPages": 5
  }
}
```

### Error Response Envelope
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid inquiry submission payload.",
    "details": [
      {
        "field": "email",
        "issue": "Invalid email formatting."
      }
    ]
  }
}
```

---

## 7. Migration Checklist for Future Backend Integration

When activating real backend services in subsequent project phases:
1. Set `VITE_API_BASE_URL` in `.env.production` and `.env.development`.
2. Keep `src/data/` intact as the test fixture / fallback provider.
3. Keep UI component props unchanged by validating through DTO mappers.
4. Replace local state simulation in `ContactForm.jsx` and `NewsletterCTA.jsx` with calls to `contactService.submitInquiry()` and `contactService.subscribeNewsletter()`.
5. Connect `useToast()` to display real-time network success and error states.
