// Backend address. Set VITE_API_URL in Vercel (e.g. https://smart-health-api.vercel.app).
// Falls back to the local backend for development.
export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");
