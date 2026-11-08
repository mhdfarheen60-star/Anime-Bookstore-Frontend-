// Central API base URL for the frontend (no trailing slash).
// Local dev: VITE_API_URL from .env. Production: from .env.production.
export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');