<script setup lang="ts">
import { useAsyncData } from "#imports";

const { data: general } = await useAsyncData(() => queryCollection("general").first());
console.log(general);

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
</template>

<style scoped>

</style>