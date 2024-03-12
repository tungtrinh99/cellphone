<template>
  <component :is="props.tag" :class="['typography', props.textClass]" :style="props.textStyle" @click="$emit('onClick')">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
const props = defineProps({
  tag: {
    type: String,
    default: "h1",
  },
  textStyle: {
    type: String,
    default: "",
  },
  textClass: {
    type: String,
    default: "",
  },
})
const emit = defineEmits(["onClick"])
</script>
<style lang="scss" scoped>
.h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.2px;
  color: #34404a;
  margin: 0;
}

.h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* line-height: 175%; */
  display: flex;
  letter-spacing: 0.2px;
  color: #34404a;
  margin: 0;
}

.h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* line-height: 175%; */
  letter-spacing: 0.2px;
  color: #323f4b;
  margin: 0;
}

.h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* line-height: 175%; */
  text-align: center;
  letter-spacing: 0.2px;
  color: #323f4b;
  margin: 0;
}

.h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.2px;
  color: #999;
  margin: 0;
}

.h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.2px;
  color: #34404a;
  margin: 0;
}

.small {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.2px;
  color: #34404a;
  margin: 0;
}

.p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 175%; */
  letter-spacing: 0.2px;
  color: #323f4b;
  word-break: break-all;
  margin: 0;
}

.pre {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 175%; */
  letter-spacing: 0.2px;
  color: #323f4b;
  white-space: break-spaces;
  word-break: break-all;
  margin: 0;
}
</style>
