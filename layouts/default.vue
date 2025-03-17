<script setup lang="ts">
import CookieBanner from '~/components/CookieBanner.vue';
</script>

<template>
  <div class="flex flex-col content-center min-h-screen">
    <Header/>
    <main class="flex-1">
      <slot/>
    </main>
    <Footer/>
    <CookieBanner />
  </div>
</template>

<style scoped>

</style>
