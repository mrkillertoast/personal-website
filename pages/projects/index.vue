<script setup lang="ts">
import { useAsyncData } from "#imports";

const { data: projects } = await useAsyncData(() =>
    queryCollection("projects")
        .order("postingDate", "DESC")
        .all()
);


import { LayoutDashboard } from "lucide-vue-next";
</script>

<template>
  <section class="container pt-24 pb-12 md:pt-32 md:pb-16">
    <div class="projects-header text-center">
      <h1 class="text-4xl font-bold mb-8"> Meine Projekte</h1>
      <p class="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-left">
        Über die Zeit arbeite ich immer wieder and persönlichen & schulischen Projekte. Um dir einen Einblick in meine
        Arbeiten zu geben, habe ich hier eine Liste mit den wichtigster Projekte und Ideen erstellt. Um noch etwas mehr
        Einblick zu gewähren, findest du jeweils einen kleine Beitrag zum Projekt.
      </p>
    </div>
  </section>
  <section id="projects" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <LayoutDashboard class="w-7 h-7"/>
          Projekte
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="(project, index) in projects" :key="index">
            <LazyProjectCard :project="project"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>