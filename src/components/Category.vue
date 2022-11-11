<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div w-full h-40px mt-20px flex justify-between items-center>
    <CategoryItem v-for="c in categories" :key="c.name" :active="activeOrigin === c.origin" :name="t(`category.${c.name}`)" :color="c.color" :origin="c.origin" />
  </div>
</template>

<style scoped></style>
