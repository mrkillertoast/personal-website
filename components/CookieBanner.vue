<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Get the event bus from the Nuxt app
const { $eventBus } = useNuxtApp();

// State for tracking if the banner should be shown
const showBanner = ref(false);

// Cookie consent options
const cookieConsent = ref({
  analytics: false
});

// Function to save consent in a cookie
const saveConsent = (acceptAll = false) => {
  if (acceptAll) {
    cookieConsent.value.analytics = true;
  }

  // Save consent to cookie (expires in 365 days)
  const consentValue = JSON.stringify(cookieConsent.value);
  document.cookie = `cookie-consent=${consentValue};max-age=${60 * 60 * 24 * 365};path=/;SameSite=Lax`;

  // Hide the banner
  showBanner.value = false;

  // Emit event for Google Analytics to respect consent
  $eventBus.emit('cookie-consent-updated', cookieConsent.value);
};

// Function to decline all cookies
const declineAll = () => {
  cookieConsent.value.analytics = false;
  saveConsent();
};

// Function to check if consent cookie exists
const checkConsentCookie = () => {
  const cookies = document.cookie.split(';');
  const consentCookie = cookies.find(cookie => cookie.trim().startsWith('cookie-consent='));

  if (consentCookie) {
    try {
      const consentValue = JSON.parse(consentCookie.split('=')[1]);
      cookieConsent.value = consentValue;
      return true;
    } catch (e) {
      return false;
    }
  }

  return false;
};

// On component mount, check if consent cookie exists
onMounted(() => {
  // Only show banner if consent cookie doesn't exist
  showBanner.value = !checkConsentCookie();

  // Emit initial consent state for Google Analytics
  $eventBus.emit('cookie-consent-updated', cookieConsent.value);
});
</script>

<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
    <Card class="mx-auto max-w-4xl shadow-lg">
      <CardHeader>
        <CardTitle>I'm a Data Engineer, what did you expect?<span class="text-sm"> (Cookie-Einstellungen)</span></CardTitle>
        <CardDescription>
          Diese Website verwendet Cookies, um Ihr Browsererlebnis zu verbessern und Analysen zur Websitenutzung bereitzustellen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-sm font-medium">Notwendige Cookies</h4>
              <p class="text-xs text-muted-foreground">Diese Cookies sind für die Funktionalität der Website erforderlich und können nicht deaktiviert werden.</p>
            </div>
            <div class="flex items-center">
              <span class="text-xs text-muted-foreground mr-2">Immer aktiv</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-sm font-medium">Google Analytics</h4>
              <p class="text-xs text-muted-foreground">Hilft mir zu verstehen, wie Besucher mit der Website interagieren. Zudem besteht persönliches Interesse ;)</p>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="analytics-consent" 
                v-model="cookieConsent.analytics"
                class="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label for="analytics-consent" class="text-xs text-muted-foreground">Aktivieren</label>
            </div>
          </div>

        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button variant="outline" @click="declineAll">Ablehnen</Button>
        <div class="space-x-2">
          <Button variant="outline" @click="saveConsent()">Auswahl speichern</Button>
          <Button @click="saveConsent(true)">Alle akzeptieren</Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
