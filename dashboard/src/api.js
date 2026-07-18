// Central place for the backend base URL.
// Set VITE_API_BASE_URL in a .env file to point at your server;
// falls back to the local dev server used by the tutorial backend.
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3002";
