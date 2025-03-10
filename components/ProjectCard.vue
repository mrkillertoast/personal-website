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

console.log(props.project)


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
          src="/images/projects/placeholder.jpg"
          :alt="props.project.title"
          class="w-full h-full object-cover transition-transform hover:scale-105 duration-500 bg-gray-500 z-0"
          v-else/>
    </div>
    <CardHeader class="p-4">
      <CardTitle class="text-lg">{{ props.project.title }}</CardTitle>
      <CardDescription class="line-clamp-2 mt-1.5">{{ props.project.description }}</CardDescription>
    </CardHeader>
    <CardContent class="p-4 pt-0 mt-auto">
      <div class="flex flex-wrap gap-2">
        <span
            v-for="(tag, tagIndex) in props.project.tags"
            :key="tagIndex"
            class="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </CardContent>
    <CardFooter class="p-4 pt-0 flex justify-between">
      <Button variant="ghost" size="sm" class="gap-1.5" v-if="props.project.githubUrl">
        <Github class="h-4 w-4"/>
        <a :href="props.project.githubUrl" target="_blank">Code</a>
      </Button>
      <div class="placeholder" v-else/>
      <Button variant="ghost" size="sm" class="gap-1.5" v-show="props.project.liveUrl">
        <ExternalLink class="h-4 w-4"/>
        <a :href="props.project.liveUrl" target="_blank">Live</a>
      </Button>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>