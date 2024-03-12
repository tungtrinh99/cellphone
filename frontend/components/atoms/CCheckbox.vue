<template>
  <el-checkbox v-model="checkbox" :key="props.propKey" :label="props.label" @change="updateCheckbox">
    {{ props.title }}
  </el-checkbox>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  propKey: {
    type: String,
    default: ""
  }
})
const checkbox: Ref<string> = ref("")
const emit = defineEmits(['onCheck'])
const updateCheckbox = () => {
  emit('onCheck', checkbox.value)
}
</script>
<style lang="scss" scoped></style>
