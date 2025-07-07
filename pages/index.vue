<script setup lang="ts">
import { useAsyncData } from "#imports";
import { Briefcase, GraduationCap, Brain, LayoutDashboard } from "lucide-vue-next";

const { data: general } = await useAsyncData(() => queryCollection("general").first());
const { data: workExperiences } = await useAsyncData(() => queryCollection("workExperience").all());
const { data: educations } = await useAsyncData(() => queryCollection("education").all());
const { data: codingSkills } = await useAsyncData(() => queryCollection("codingSkills").all());
const { data: softSkills } = await useAsyncData(() => queryCollection("softSkills").all());
const { data: hardSkills } = await useAsyncData(() => queryCollection("hardSkills").all());

const projects = await queryCollection("projects").order("postingDate", "DESC").limit(3).all();

const { data: languageSkills } = await useAsyncData(() => queryCollection("languageSkills").all());

const sortedLanguages = computed(() => {
  if (!languageSkills.value) return [];
  return [ ...languageSkills.value ].sort((a, b) => a.order - b.order);
});

const sortedWorkExperiences = computed(() => {
  if (!workExperiences.value) return [];
  return [ ...workExperiences.value ].sort((b, a) => a.order - b.order);
});

</script>

<template>
  <section class="hero">
    <Hero
        :title="general?.name"
        :subtitle="general?.subtitle"
        :description="general?.description"
        :resume-button="{ display:true, text: 'Lebenslauf herunterladen', link: '/docs/lebenslauf.pdf' }"
        :contactButton="{display:true, text: 'Kontaktiere mich', link: '/#contact'}"
        :images="general?.images"
    />
  </section>

  <section id="experience" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <Briefcase class="w-7 h-7"/>
          Arbeitserfahrung
        </h2>

        <div class="grid grid-cols-1 gap-10">
          <div v-for="(workExperience, index) in sortedWorkExperiences" :key="index">
            <ExperienceItem :experience="workExperience"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="education" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap class="w-7 h-7"/>
          Ausbildung
        </h2>

        <div class="grid grid-cols-1 gap-10">
          <div v-for="(education, index) in educations" :key="index">
            <LazyExperienceItem :experience="education"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center  gap-3">
          <Brain class="w-7 h-7"/>
          Skills & Fähigkeiten
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <LazySkillCard category-title="Coding" :skills-list="codingSkills ?? []"/>
          <LazySkillCard category-title="Soft" :skills-list="softSkills ?? []"/>
          <LazySkillCard category-title="Hard" :skills-list="hardSkills ?? []"/>
          <LazySkillCard category-title="Languages" :skills-list="sortedLanguages ?? []"/>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <LayoutDashboard class="w-7 h-7"/>
          Neuste Projekte
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="(project, index) in projects" :key="index">
            <LazyProjectCard :project="project"/>
          </div>
        </div>

        <div class="mt-16 text-lg text-center">
          <Button variant="default" class=" hover:underline">
            <NuxtLink to="/projects" class="flex items-center justify-center gap-2">
              Alle Projekte entdecken
            </NuxtLink>
          </Button>
        </div>

      </div>
    </div>
  </section>

  <section id="contact" class="py-16">
    <LazyContact :email="general?.email" :location="general?.location"/>
  </section>

</template>

<style scoped>

</style>