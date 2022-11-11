<script setup lang="ts">
import type { Todo } from '../store/todo'
const props = defineProps<Todo>()
const done = ref(false)
watch(() => props.done, (val) => {
  done.value = val
}, { immediate: true })

watch(() => done.value, (val) => {
  if (val)
    transfer(props.id, Category.Done)
  else
    transfer(props.id, Category.Todo)
  saveTodoState(props.id, val)
})

const isEdit = ref(false)

const onChange = (e: Event) => {
  const value = (e.target as HTMLDivElement).innerText
  updateTodo(value, props.id)
}
</script>

<template>
  <div
    w-full min-h-40px rounded-6px overflow-hidden
    bg-blue-500 flex items-center pl-20px box-border group
    cursor-pointer relative text-white
    :class="{
      'bg-gray-300 text-gray-600 dark:bg-gray-500': done,
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
      <div :contenteditable="isEdit" break-all @input="onChange">
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
