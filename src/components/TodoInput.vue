<script setup lang="ts">
import { input, onChange } from './TodoInput'

const { t } = useI18n()
</script>

<template>
  <input
    v-model="input" w-300px h-30px
    text-16px rounded-6px p-4px pl-12px outline-none
    border-none box-content bg-gray-200 dark:bg="#3B3B3B"
    :placeholder="t('input.placeholder')" @input="onChange"
  >
</template>

<style scoped></style>
