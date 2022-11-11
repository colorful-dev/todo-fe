<script setup lang="ts">
</script>

<template>
  <div mt-10vh w-315px>
    <h1 text-60px text="#3C6AFF" font-bold mb-1>
      Todo List
    </h1>
    <TodoInput />

    <div flex="~ wrap col" gap-10px first-of-type:mt-10px>
      <TodoItem v-for="todo in todoList" :key="todo.id" :="todo" />
    </div>

    <Category />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
