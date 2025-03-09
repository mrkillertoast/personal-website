<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
    default: "lucide:check"
  },
  remark: {
    type: String,
    required: false,
  }
})

</script>

<template>
    <Icon :name="props.icon" class="w-4 h-4 bg-gray-600"/>
    <span class="ml-3">{{ props.title }}</span>
    <span v-if="props.remark" class="text-xs text-muted-foreground ml-2">({{ props.remark }})</span>
</template>

<style scoped>

</style>