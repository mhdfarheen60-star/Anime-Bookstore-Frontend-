// Central API base URL for the frontend (origin only, no "/api").
// Local dev: VITE_API_URL from .env. Production: from .env.production.
// The API client appends "/api" exactly once. Normalize any trailing slashes or
// legacy "/api" suffix (e.g. from a hosting dashboard env var) so the final URL
// can never become "/api/api".
const rawApiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000').trim();

export const API_URL = rawApiUrl
  .replace(/\/+$/, '')
  .replace(/(?:\/api)+$/i, '')
  .replace(/\/+$/, '');