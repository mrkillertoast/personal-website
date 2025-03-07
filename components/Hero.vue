<template>
  <section id="about" class="container py-24 md:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Hi, I'm John Doe
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          A passionate <span class="text-primary font-medium">Frontend Developer</span> with 5 years of experience building modern web applications.
        </p>
        <p class="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
          I specialize in creating responsive, accessible, and performant web applications using Vue, TypeScript, and modern CSS frameworks. I'm passionate about user experience and building products that are both beautiful and functional.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button class="gap-2">
            <Download class="w-4 h-4" />
            Download Resume
          </Button>
          <Button variant="outline">
            Contact Me
          </Button>
        </div>
      </div>

      <div class="animate-fade-in">
        <Carousel class="w-full max-w-xs mx-auto">
          <CarouselContent>
            <CarouselItem v-for="(image, index) in personalImages" :key="index">
              <div class="p-1">
                <div class="overflow-hidden rounded-lg shadow-md">
                  <img
                      :src="image"
                      :alt="`Personal photo ${index + 1}`"
                      class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Download } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample portrait images for the slider
const personalImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=750",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&h=750",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&h=750",
];
</script>
