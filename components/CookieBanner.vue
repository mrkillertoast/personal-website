<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Use the cookie banner composable instead of managing state directly
const {
  isBannerVisible,
  consentSettings,
  acceptAll,
  acceptNecessary,
} = useCookieBanner();
</script>

<template>
  <div v-if="isBannerVisible" class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
    <Card class="mx-auto max-w-4xl shadow-lg">
      <CardHeader>
        <CardTitle>I'm a Data Engineer, what did you expect?<span class="text-sm"> (Cookie-Einstellungen)</span>
        </CardTitle>
        <CardDescription>
          Diese Website verwendet Cookies, um Ihr Browsererlebnis zu verbessern und Analysen zur Websitenutzung
          bereitzustellen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="grid grid-cols-3 md:grid-cols-5">
            <div class="col-span-2 md:col-span-4">
              <h4 class="text-sm font-medium">Notwendige Cookies</h4>
              <p class="text-xs text-muted-foreground">Diese Cookies sind für die Funktionalität der Website
                erforderlich und können nicht deaktiviert werden.</p>
            </div>
            <div class="justify-self-end self-center">
              <span class="text-xs text-muted-foreground mr-2">Immer aktiv</span>
            </div>
          </div>

          <div class="grid grid-cols-3 md:grid-cols-5">
            <div class="col-span-2 md:col-span-4">
              <h4 class="text-sm font-medium">Google Analytics</h4>
              <p class="text-xs text-muted-foreground">Hilft mir zu verstehen, wie Besucher mit der Website
                interagieren. Zudem besteht persönliches Interesse ;)</p>
            </div>
            <div class="justify-self-end self-center">
              <input
                  type="checkbox"
                  id="analytics-consent"
                  v-model="consentSettings.analytics"
                  class="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label for="analytics-consent" class="text-xs text-muted-foreground">Aktivieren</label>
            </div>
          </div>

        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button variant="outline" @click="acceptNecessary">nur Notwendige</Button>
        <div class="space-x-2">
          <Button @click="acceptAll">Alle akzeptieren</Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>