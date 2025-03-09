<script setup lang="ts">
import type { IExperienceItem } from "~/types";

const props = defineProps({
  experience: {
    type: Object as PropType<IExperienceItem>,
    required: true,
  }
})
</script>

<template>
  <div class="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
    <div class="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full border bg-background"></div>
    <h3 class="text-xl font-semibold mb-1">{{ props.experience.title }}</h3>
    <div class="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-3">
      <a :href="props.experience.url" target="_blank"><span class="font-medium">{{ props.experience.location }}</span></a>
      <span class="hidden sm:inline mx-2">•</span>
      <span>{{ props.experience.startDate }}</span><span v-show="props.experience.endDate"> - {{ props.experience.endDate }}</span>
    </div>
    <p class="mb-3 text-muted-foreground">{{ props.experience.description }}</p>
    <div class="flex flex-wrap gap-2">
              <span
                  v-for="(tag, index) in props.experience.tags"
                  :key="index"
                  class="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {{ tag }}
              </span>
    </div>
  </div>
</template>

<style scoped>

</style>