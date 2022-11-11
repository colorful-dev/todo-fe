<script setup lang="ts">
import { input, inputState, onChange, onConfirm } from './TodoInput'

const { t } = useI18n()
</script>

<template>
  <div>
    <input
      v-model="input" w-300px h-30px
      text-16px rounded-6px p-4px pl-12px outline-none
      border-none box-content bg-gray-200 dark:bg="#3B3B3B"
      :placeholder="t('input.placeholder')" @input="onChange"
      @keydown.enter="onConfirm"
    >
    <div w-full text-red-500 flex justify-start py-1 text-14px h-30px>
      {{ inputState.message }}
    </div>
  </div>
</template>

<style scoped></style>
