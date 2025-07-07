<script setup lang="ts">
useHead({
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})

onBeforeMount(async () => {
  window.location.href = await $fetch('/api/v1/functions/drive', { method: 'GET' })
})

</script>

<template>

</template>

<style scoped>

</style>