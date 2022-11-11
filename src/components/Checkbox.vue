<script setup lang="ts">
defineProps<{
  checked: boolean
}>()

const emit = defineEmits(['update:checked'])

const onChange = (v: Event) => {
  const checked = (v.target as HTMLInputElement).checked
  emit('update:checked', checked)
}
</script>

<template>
  <label
    class="container"
    display-none group-hover:display-block absolute left-20px top="50%" transform="translate-y--50%"
    cursor-pointer text-20px select-none
  >
    <input
      absolute opacity-0 cursor-pointer h-0
      type="checkbox" :checked="checked" @change="onChange"
    >
    <div
      class="checkmark"
      relative top-0 left-0 w="16px" h="16px" bg="#ccc" transition="all 0.3s"
      rounded-5px
      after="content-none absolute display-none left-0.42em top-0.26em w-0.3em h-0.5em
        b-0.2em b-#fff border-t-none border-r-none"
    />
  </label>
</template>

<style scoped>
.container {
  animation: fadeIn 0.5s 1;
}
.container input:checked ~ .checkmark {
 background-color: #47da99;
 animation: pop 0.5s;
 animation-direction: alternate;
}

.container input:checked ~ .checkmark:after {
 display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pop {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.9);
 }

 100% {
  transform: scale(1);
 }
}
</style>
