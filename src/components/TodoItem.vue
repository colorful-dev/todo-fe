<script setup lang="ts">
import type { Todo } from '../store/todo'
const props = defineProps<Todo>()
const done = ref(false)
watch(() => props.done, (val) => {
  done.value = val
})

const isEdit = ref(false)

const onChange = (e: Event) => {
  const value = (e.target as HTMLDivElement).innerText
  updateTodo(value, props.id)
}
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
    @click.left.prevent="done = isEdit ? done : !done"
    @click.right.prevent="isEdit = done ? false : !isEdit"
  >
    <Checkbox
      v-model:checked="done" :class="{
        'group-hover:display-block': !isEdit,
        'check-box': !isEdit,
      }"
    />
    <div
      :class="{
        'group-hover-translate-x-26px': !isEdit,
      }" transition="300" flex justify-start items-center
    >
      <div v-if="isEdit" mr-10px bg-blue-600 h-18px leading-18px rounded-1 px-5px text-12px>
        E
      </div>
      <div :contenteditable="isEdit" @input="onChange">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.check-box {
  animation: fadeIn 0.5s 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
