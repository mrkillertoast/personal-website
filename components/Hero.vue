<script setup lang="ts">
import { Download } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { IHeroButton } from "~/types/hero/IHeroButton";
// Sample portrait images for the slider
const personalImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=750",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&h=750",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&h=750",
];

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "This is a Title",
  },
  subtitle: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  resumeButton: {
    type: Object as PropType<IHeroButton>,
    required: false,
    default: false,
  },
  contactButton: {
    type: Object as PropType<IHeroButton>,
    required: false,
    default: false,
  },
});
</script>

<template>
  <section id="about" class="container py-24 md:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {{ props.title }}
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          {{ props.subtitle }}
        </p>
        <p class="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
          {{
            props.description
          }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button class="gap-2" v-show="props.resumeButton.display">
            <Download class="w-4 h-4"/>
            {{ props.resumeButton.text }}
          </Button>
          <Button variant="outline" v-show="props.contactButton.display">
            {{props.contactButton.text}}
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
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
    </div>
  </section>
</template>
