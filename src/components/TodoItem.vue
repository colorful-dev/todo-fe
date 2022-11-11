<script setup lang="ts">
import type { Todo } from '../store/todo'
const props = defineProps<Todo>()

const done = ref(false)
watch(() => props.done, (val) => {
  done.value = val
})
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
    {{ text }}
  </div>
</template>

<style scoped></style>
