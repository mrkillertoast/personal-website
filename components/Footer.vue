
<script setup lang="ts">
import {Github, Linkedin, Mail, Twitter} from 'lucide-vue-next';
import {Button} from '@/components/ui/button';

const {data: general} = await useAsyncData(() => queryCollection('general').first());
</script>

<template>
  <footer class="py-8 border-t">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <div>
          <p class="text-muted-foreground text-sm">
            © {{ new Date().getFullYear() }} {{ general.name }}.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

