<template>
  <img :src="props.src" :alt="props.alt" :class="[
    'icon',
    props.className
  ]">
</template>
<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
})
</script>
<style lang="scss" scoped>
</style>
