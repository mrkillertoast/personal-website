import { defineNuxtPlugin } from '#app'

// Define consent interface
interface ConsentOptions {
  analytics: boolean;
  [key: string]: boolean;
}

export default defineNuxtPlugin((nuxtApp) => {
  // Create simplified event bus for consent events only
  const consentListeners: Function[] = [];

  // Set up Google Analytics with simplified consent handling
  if (process.client) {
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };

    // Default to no consent
    window.gtag('consent', 'default', { 'analytics_storage': 'denied' });

    // Check for saved consent on mount
    nuxtApp.hook('app:mounted', () => {
      // Get consent from cookie
      const consentCookie = document.cookie
          .split(';')
          .find(c => c.trim().startsWith('cookie-consent='));

      if (consentCookie) {
        try {
          const consent = JSON.parse(consentCookie.split('=')[1]);
          // Update GA consent if analytics is enabled
          if (consent.analytics === true) {
            window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
          }
        } catch (e) {
          console.error('Error parsing consent cookie', e);
        }
      }
    });
  }

  // Simplified event bus focused only on consent
  const eventBus = {
    emit(event: string, ...args: any[]) {
      if (event === 'cookie-consent-updated') {
        consentListeners.forEach(callback => callback(...args));

        // Update GA consent directly when event is emitted
        if (process.client) {
          const [consent] = args as [ConsentOptions];
          window.gtag('consent', 'update', {
            'analytics_storage': consent.analytics ? 'granted' : 'denied'
          });
        }
      }
    },

    on(event: string, callback: Function) {
      if (event === 'cookie-consent-updated') {
        consentListeners.push(callback);
      }
    },

    off(event: string, callback: Function) {
      if (event === 'cookie-consent-updated') {
        const index = consentListeners.indexOf(callback);
        if (index !== -1) consentListeners.splice(index, 1);
      }
    }
  };

  return { provide: { eventBus } };
});

// TypeScript definitions
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}