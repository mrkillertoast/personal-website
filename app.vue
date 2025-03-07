<template>
  <div class="flex flex-col content-center min-h-screen">
    <Header/>
    <main class="flex-1">
      <Hero/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Skills from "~/components/Skills.vue";
</script>