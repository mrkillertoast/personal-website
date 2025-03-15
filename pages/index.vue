<script setup lang="ts">
import { useAsyncData } from "#imports";
import { Briefcase, GraduationCap, Brain, LayoutDashboard } from "lucide-vue-next";

const { data: general } = await useAsyncData(() => queryCollection("general").first());
const { data: workExperiences } = await useAsyncData(() => queryCollection("workExperience").all());
const { data: educations } = await useAsyncData(() => queryCollection("education").all());
const { data: codingSkills } = await useAsyncData(() => queryCollection("codingSkills").all());
const { data: projects } = await useAsyncData(() => queryCollection("projects").all());

</script>

<template>
  <section class="hero">
    <Hero
        :title="general?.name"
        :subtitle="general?.subtitle"
        :description="general?.description"
        :resume-button="{ display:true, text: 'Lebenslauf herunterladen', link: '' }"
        :contactButton="{display:true, text: 'Kontakt', link: ''}"
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

        <div class="space-y-12">
          <div class="work-experience-container" v-for="(workExperience, index) in workExperiences" :key="index">
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

        <div class="space-y-12">
          <div class="education-experience-container" v-for="(education, index) in educations" :key="index">
            <ExperienceItem :experience="education"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center  gap-3">
          <Brain class="w-7 h-7"/>
          Skills & Fähigkeiten
        </h2>

        <div class="space-y-12 ">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard category-title="Coding" :skills-list="codingSkills ?? []"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="py-16 bg-secondary/10">
    <Projects/>
    <div class="container">
      <div class="max-w-5xl">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <LayoutDashboard class="w-7 h-7"/>
          Projekte
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-for="(project, index) in projects" :key="index">
          <ProjectCard :project/>

        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-16">
    <Contact :email="general?.email" :location="general?.location"/>
  </section>

</template>

<style scoped>

</style>