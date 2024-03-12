<template>
  <a :class="['link', props.className]" :href="props.url" :target="props.target" @click="$emit('onClick')">
    <span v-if="props.title">{{ props.title }}</span>
    <slot></slot>
  </a>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

type Target = "_blank" | "_self" | "_parent" | "_top";
const props = defineProps({
  url: {
    type: String,
    default: "",
    required: false
  },
  target: {
    type: String as PropType<Target>,
    default: "_self",
    required: true
  },
  title: {
    type: String,
    default: "",
    required: false
  },
  className: {
    type: String,
    default: "",
    required: false
  }
});
const emit = defineEmits(["onClick"]);
</script>
<style scoped lang="scss">
.link {
  cursor: pointer;
}
</style>
