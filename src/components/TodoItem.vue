<script setup lang="ts">
defineProps<{

}>()

const done = ref(false)
</script>

<template>
  <div
    w-full h-40px rounded-6px
    bg-blue-500 flex items-center pl-20px box-border
    :class="{
      'bg-gray-500': done,
      'line-through': done,
    }"
  >
    <Checkbox v-model:checked="done" mr-10px />
    {{}}
  </div>
</template>

<style scoped></style>
