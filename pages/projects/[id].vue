<script setup lang="ts">
import { ExternalLink, Github } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

/**
 * This page displays a single project based on the project identifier passed in the route.
 * It fetches the project data from the "projects" collection using the identifier.
 */
const route = useRoute();
const blogPost = await queryCollection('projects').path(`/projects/${ route.params.id }`).first()
</script>

<template>


  <section class="blog-intro container pt-12 pb-12 md:pt-32 md:pb-16">
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8 ">
      <div class="image-container">
        <img v-if="blogPost?.imageUrl" :src="blogPost?.imageUrl" alt="Project Image"
             class="w-full h-auto rounded-lg shadow-md">
        <img v-else src="/images/projects/placeholder.webp" alt="Project Image"
             class="w-full h-auto rounded-lg shadow-md">
      </div>
      <div class="text-container grid col-span-2 gap-4 content-start">
        <div class="blog-title mb-4">
          <h1 class="text-center uppercase mt-8 md:mt-0">{{ blogPost?.title }}</h1>
          <div class="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <span>{{ blogPost.postingDate }}</span>
            <span class="inline mx-2">•</span>
            <span>{{ blogPost.status }}</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <span
              v-for="(tag, tagIndex) in blogPost?.tags"
              :key="tagIndex"
              class="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <p class="text-lg text-muted-foreground leading-relaxed">
          {{ blogPost?.blogIntro || blogPost?.tagline }}
        </p>
        <div class="external-links flex gap-4 justify-center">
          <Button variant="outline" class="gap-1.5" v-if="blogPost.githubUrl">
            <a :href="blogPost.githubUrl" target="_blank" class="flex items-center gap-1.5">
              <Github class="w-5 h-5"/>
              Code
            </a>
          </Button>

          <Button variant="outline" class="gap-1.5" v-if="blogPost.liveUrl">
            <a :href="blogPost.liveUrl" target="_blank" class="flex items-center gap-1.5">
              <ExternalLink class="h-4 w-4"/>
              Live
            </a>
          </Button>
        </div>
      </div>
    </div>

  </section>
  <section class="container blog-article mb-8">
    <ContentRenderer :value="blogPost" :prose="true"></ContentRenderer>
  </section>
</template>

<style scoped>
/* Styles overwrite for Markdown content */
:deep(h1:first-of-type) {
  @apply text-3xl;
  @apply font-bold;
  @apply uppercase;
  @apply mt-0;
  @apply mb-2;
}

:deep(h1) {
  @apply text-3xl;
  @apply font-bold;
  @apply uppercase;
  @apply mt-8;
  @apply mb-2;
}

:deep(h2) {
  @apply text-2xl;
  @apply font-bold;
  @apply mt-6;
  @apply mb-2;
}

:deep(h3) {
  @apply text-xl;
  @apply font-bold;
  @apply mt-6;
  @apply mb-2;
}

:deep(h4) {
  @apply text-lg;
  @apply font-semibold;
  @apply mt-4;
  @apply mb-1;
}

:deep(p), :deep(li) {
  @apply text-muted-foreground;
  @apply mb-1;
}

</style>