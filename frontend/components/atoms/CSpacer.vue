<template>
  <div class="spacer" :style="{
    height: props.size + 'px',
    width: props.size + 'px'
  }"></div>
</template>
<script lang="ts" setup>
const props = defineProps({
  size: {
    type: Number,
    default: 0,
    required: true
  }
})
</script>
