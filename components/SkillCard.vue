<script setup lang="ts">
import type { ISkill } from "~/types";

const props = defineProps({
  skillsList:{
    type: Array<ISkill>,
    required: true,
  },
  categoryTitle: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="card-container rounded-lg border bg-card text-card-foreground shadow-sm w-full">
    <div class="flex flex-col space-y-1.5 p-6 pb-2">
      <h3 class="text-xl font-semibold leading-none tracking-tight mb-1">{{props.categoryTitle}}</h3>
    </div>
    <div class="p-6 pt-0">
      <ul class="space-y-2">
        <li v-for="(skill, index) in props.skillsList" :key="index" class="flex items-center">
          <SkillItem :title="skill.meta.body.title" :icon="skill.meta.body.icon" :remark="skill.meta.body.remark"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>