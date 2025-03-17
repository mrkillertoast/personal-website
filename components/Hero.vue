<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { IHeroButton } from "~/types/hero/IHeroButton";

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
  images: {
    type: Array as PropType<string[]>,
    required: false,
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
          <!--<Button class="gap-2" v-show="props.resumeButton.display">
            <Download class="w-4 h-4"/>
            {{ props.resumeButton.text }}
          </Button>-->
          <Button v-show="props.contactButton.display">
            <a :href="props.contactButton.link">
              {{ props.contactButton.text }}
            </a>
          </Button>
        </div>
      </div>

      <div class="animate-fade-in">
        <Carousel class="w-full max-w-xs mx-auto">
          <CarouselContent>
            <CarouselItem v-for="(image, index) in props.images" :key="index">
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
