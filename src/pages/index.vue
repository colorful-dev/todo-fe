<script setup lang="ts">
const listLength = 10
</script>

<template>
  <div mt-10vh max-w="40%">
    <h1 text-60px text="#3C6AFF" font-bold mb-1>
      Todo List
    </h1>
    <TodoInput />

    <div flex="~ wrap col" gap-10px first-of-type:mt-10px>
      <TodoItem v-for="i in listLength" :key="i" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
