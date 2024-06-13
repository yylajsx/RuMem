<script setup>

defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: String,
  color: {
    type: String,
    default: 'var(--text-400)'
  },
  width: {
    type: String,
    default: '2rem'
  },
  height: {
    type: String,
    default: '2rem'
  }
})
</script>

<template>
  <svg :style="{width,height}">
    <use :fill="color" :xlink:href="prefix+name"></use>
  </svg>
</template>

<style scoped>

</style>