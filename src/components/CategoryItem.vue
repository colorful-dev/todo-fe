<script setup lang="ts">
import type { Category } from '../store/category'

defineProps<{
  name: string
  color: string
  active: boolean
  origin: Category
}>()
</script>

<template>
  <div
    w="40%" :style="{
      background: active ? color : '#616161',
    }" h-30px flex-center cursor-pointer rounded-4px
    @click="switchCategory(origin)"
  >
    {{ name }}
  </div>
</template>

<style scoped></style>
