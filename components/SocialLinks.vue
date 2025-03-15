<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-vue-next";

const props = defineProps({
  github: {
    type: String,
    required: false
  },
  linkedIn: {
    type: String,
    required: false
  },
  mailto: {
    type: String,
    required: false
  }
});

</script>

<template>
  <Button size="icon" variant="ghost" v-show="props.github">
    <a :href="props.github" target="_blank">
      <Github class="w-5 h-5"/>
    </a>
  </Button>
  <Button size="icon" variant="ghost" v-show="props.linkedIn">
    <a :href="props.linkedIn" target="_blank">
      <Linkedin class="w-5 h-5"/>
    </a>
  </Button>
  <Button size="icon" variant="ghost" props.mailto>
    <a :href="props.mailto" target="_blank">
      <Mail class="w-5 h-5"/>
    </a>
  </Button>
</template>

<style scoped>

</style>