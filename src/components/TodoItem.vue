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
    bg-blue-500 flex items-center pl-20px box-border group
    cursor-pointer relative
    :class="{
      'bg-gray-500': done,
      'line-through': done,
    }"
    @click.prevent="done = !done"
  >
    <Checkbox v-model:checked="done" />
    <div group-hover-translate-x-26px transition="300">
      {{ text }}
    </div>
  </div>
</template>

<style scoped></style>
