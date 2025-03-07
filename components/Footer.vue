<template>
  <footer class="py-8 border-t">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p class="text-muted-foreground text-sm">
            © {{ new Date().getFullYear() }} John Doe. All rights reserved.
          </p>
        </div>

        <div class="flex space-x-2">
          <Button size="icon" variant="ghost">
            <Github class="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Linkedin class="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Twitter class="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Mail class="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
</script>
