<template>
  <div>
   <!-- <Header />
    <Hero />
    <Experience />
    <Projects />
    <Contact />
    <Footer />-->
    <div class="flex flex-col content-center min-h-screen">
      <Header />
      <main class="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>