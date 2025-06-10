<script setup lang="ts">

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ExternalLink, Github } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import type { IProjectItem } from "~/types";

const props = defineProps({
  project: {
    type: Object as PropType<IProjectItem>,
    required: true,
  }
})

const projectId = computed(() => {
  if (!props.project.id) return '';
  const lastPart = props.project.id.split('/').pop() || '';
  return lastPart.split('.')[ 0 ];
});

</script>

<template>
  <Card
      class="overflow-hidden flex flex-col h-full border border-border/50 transition-all hover:border-border hover:shadow-sm">
    <div class="aspect-video overflow-hidden">
      <img
          :src="props.project.imageUrl"
          :alt="props.project.title"
          class="w-full h-full object-cover transition-transform hover:scale-105 duration-500 bg-gray-500 z-0"
          v-if="props.project.imageUrl"/>
      <img
          src="/images/projects/placeholder.webp"
          :alt="props.project.title"
          class="w-full h-full object-cover transition-transform hover:scale-105 duration-500 bg-gray-500 z-0"
          v-else/>
    </div>
    <CardHeader class="p-4">
      <CardTitle class="text-lg">{{ props.project.title }}</CardTitle>
      <div class="flex flex-row sm:items-center text-xs text-muted-foreground">
        <span>{{ props.project.postingDate }}</span>
        <span class="inline mx-2">•</span>
        <span>{{ props.project.status }}</span>
      </div>
    </CardHeader>
    <CardContent class="px-4 mb-auto">
      <div class="line-clamp-2 text-muted-foreground text-sm">
        <p v-if="props.project.tagline">
          {{ props.project.tagline }}
        </p>
        <p v-else>
          {{ props.project.description }}
        </p>
      </div>

    </CardContent>
    <CardFooter class="p-4 pt-0 flex justify-between">
      <div class="blog-link">
        <Button variant="default" size="sm" class="gap-1.5" v-if="projectId">
          <a :href="`/projects/${projectId}`">Weiterlesen</a>
        </Button>
        <div class="placeholder" v-else/>
      </div>

      <div class="external-links flex gap-1.5">
        <Button variant="outline" size="sm" class="gap-1.5" v-if="props.project.githubUrl">
          <a :href="props.project.githubUrl" target="_blank" class="flex items-center gap-1.5">
            <Github class="w-5 h-5"/>
          </a>
        </Button>

        <div class="placeholder" v-else/>
        <Button variant="outline" size="sm" class="gap-1.5" v-if="props.project.liveUrl">
          <a :href="props.project.liveUrl" target="_blank" class="flex items-center gap-1.5">
            <ExternalLink class="h-4 w-4"/>
            Live
          </a>
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>