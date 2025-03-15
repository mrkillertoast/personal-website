<script setup lang="ts">
import { ref } from "vue";
import { Menu, X, Github, Linkedin, Mail } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import SocialLinks from "~/components/SocialLinks.vue";

//Menu controls
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

//Data fetching
const { data: general } = await useAsyncData(() => queryCollection("general").first());
const { data: navigation } = await useAsyncData(() => queryCollection("navigation").all());

const sortedNavigation = computed(() => {
  if (!navigation.value) return [];
  return [...navigation.value].sort((a, b) => a.order - b.order);
});
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
    <div class="container flex items-center justify-between h-16 mx-auto">
      <NuxtLink to="/" class="font-semibold text-lg tracking-tight">
        {{ general?.name }}
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <a v-for="(item, index) in sortedNavigation" :key="index"
           :href="item.url"
           class="text-sm font-medium hover:text-primary/80 transition-colors"
        >
          {{ item.name }}
        </a>
      </nav>

      <div class="hidden md:flex items-center space-x-3">
        <SocialLinks :github="general?.githubUrl" :linked-in="general?.linkedInUrl" :mailto="general?.mailtoUrl"/>
      </div>

      <!-- Mobile menu button -->
      <Button
          variant="ghost"
          size="icon"
          class="md:hidden"
          @click="toggleMenu"
      >
        <X v-if="isMenuOpen" class="h-5 w-5"/>
        <Menu v-else class="h-5 w-5"/>
      </Button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="container py-4 space-y-4">
        <a
            v-for="(item, index) in sortedNavigation" :key="index"
            :href="item.url"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          {{ item.name }}
        </a>

        <div class="flex space-x-3 pt-3 border-t">
          <SocialLinks :github="general?.githubUrl" :linked-in="general?.linkedInUrl" :mailto="general?.mailtoUrl"/>
        </div>
      </div>
    </div>
  </header>
</template>