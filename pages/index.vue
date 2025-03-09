<script setup lang="ts">
import { useAsyncData } from "#imports";
import { Briefcase } from "lucide-vue-next";

const { data: general } = await useAsyncData(() => queryCollection("general").first());
const { data: workExperiences } = await useAsyncData(() => queryCollection("workExperience").all());

</script>

<template>
  <section class="hero">
    <Hero
        :title="general?.name"
        :subtitle="general?.subtitle"
        :description="general?.description"
        :resume-button="{ display:true, text: 'Lebenslauf herunterladen', link: '' }"
        :contactButton="{display:true, text: 'Kontakt', link: ''}"
    />
  </section>

  <section id="experience" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <Briefcase class="w-7 h-7"/>
          Arbeitserfahrung
        </h2>

        <div class="space-y-12">
          <div class="work-experience-container" v-for="(workExperience, index) in workExperiences" :key="index">
            <ExperienceItem :workExperience="workExperience"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>