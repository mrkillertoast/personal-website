<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col content-center min-h-screen">
    <Header/>
    <main class="flex-1">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>