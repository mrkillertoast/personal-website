<script setup lang="ts">
import { ref } from "vue";
import { Menu, X, Github, Linkedin, Mail } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

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
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
    <div class="container flex items-center justify-between h-16 mx-auto">
      <NuxtLink to="/" class="font-semibold text-lg tracking-tight">
        {{ general.name }}
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <a v-for="(item, index) in navigation" :key="index"
           :href="item.url"
           class="text-sm font-medium hover:text-primary/80 transition-colors"
        >
          {{ item.name }}
        </a>
      </nav>


      <!-- <nav class="hidden md:flex items-center space-x-6">
         <a
             href="#about"
             class="text-sm font-medium hover:text-primary/80 transition-colors"
         >
           About
         </a>
         <a
             href="#experience"
             class="text-sm font-medium hover:text-primary/80 transition-colors"
         >
           Experience
         </a>
         <a
             href="#skills"
             class="text-sm font-medium hover:text-primary/80 transition-colors"
         >
           Skills
         </a>
         <a
             href="#projects"
             class="text-sm font-medium hover:text-primary/80 transition-colors"
         >
           Projects
         </a>
         <a
             href="#contact"
             class="text-sm font-medium hover:text-primary/80 transition-colors"
         >
           Contact
         </a>
       </nav>-->

      <div class="hidden md:flex items-center space-x-3">
        <Button size="icon" variant="ghost">
          <Github class="w-5 h-5"/>
        </Button>
        <Button size="icon" variant="ghost">
          <Linkedin class="w-5 h-5"/>
        </Button>
        <Button size="icon" variant="ghost">
          <Mail class="w-5 h-5"/>
        </Button>
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
            href="#about"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          About
        </a>
        <a
            href="#experience"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          Experience
        </a>
        <a
            href="#skills"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          Skills
        </a>
        <a
            href="#projects"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          Projects
        </a>
        <a
            href="#contact"
            class="block text-sm font-medium hover:text-primary/80 transition-colors"
            @click="closeMenu"
        >
          Contact
        </a>
        <div class="flex space-x-3 pt-3 border-t">
          <Button size="icon" variant="ghost">
            <Github class="w-5 h-5"/>
          </Button>
          <Button size="icon" variant="ghost">
            <Linkedin class="w-5 h-5"/>
          </Button>
          <Button size="icon" variant="ghost">
            <Mail class="w-5 h-5"/>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>