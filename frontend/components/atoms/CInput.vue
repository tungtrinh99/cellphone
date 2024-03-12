<template>
  <label class="label" :for="props.elementId">{{ props.label }}</label>
  <el-input :id="props.elementId" :placeholder="props.placeHolder" :class="[
    'input',
    props.className
  ]" :disabled="props.disabled" :type="props.type" @input="updateValue" v-model="input" />
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
const props = defineProps({
  placeHolder: {
    type: String,
    required: false,
    default: ""
  },
  className: {
    type: String,
    required: false,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "text"
  },
  elementId: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
})
const emit = defineEmits(['onInput'])
const input: Ref<string> = ref("")
const updateValue = () => {
  emit('onInput', input.value)
}

</script>
<style lang="scss" scoped>
.input {
  height: 60px;
  border-radius: 5px;
  border: 1px solid #B5B5B5;

  &::placeholder {
    color: #C9C9C9;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
}

.label {
  color: #3D8AA7;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
</style>
