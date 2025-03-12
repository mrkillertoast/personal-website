
<script setup lang="ts">
import {Github, Linkedin, Mail, Twitter} from 'lucide-vue-next';
import {Button} from '@/components/ui/button';

const {data: general} = await useAsyncData(() => queryCollection('general').first());
</script>

<template>
  <footer class="py-8 border-t">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p class="text-muted-foreground text-sm">
            © {{ new Date().getFullYear() }} {{ general.name }}
          </p>
        </div>
        <div class="legal-links">
          <Button variant="ghost" size="sm" class="gap-1.5">
            <a href="/impressum">Impressum</a>
          </Button>
          <Button variant="ghost" size="sm" class="gap-1.5">
            <a href="/datenschutz">Datenschutz</a>
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

