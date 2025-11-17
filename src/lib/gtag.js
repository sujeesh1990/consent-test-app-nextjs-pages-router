// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Standard pageview call
export const pageview = (url) => {
  if (!window.gtag) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Custom event
export const event = ({ action, params }) => {
  if (!window.gtag) return;

  window.gtag('event', action, params);
};
