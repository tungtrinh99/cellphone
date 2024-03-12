<template>
  <el-button :class="[
    'button',
    props.type === 'primary' ? 'btn-primary' :
      props.type === 'danger' ? 'btn-danger' :
        props.type === 'default' ? 'btn-default' : '',
    props.className
  ]" :loading="props.loading" @click="emit('onClick')">
    <slot></slot>
  </el-button>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
type ButtonType = 'primary' | 'danger' | 'default'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: "primary",
    required: true
  },
  className: {
    type: String,
    default: ""
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['onClick'])

</script>
<style lang="scss" scoped>
.button {
  height: 50px;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px 0 8px;

  &.btn-primary {
    background-color: #169BC5;
    border: 1px solid #169BC5;
    color: #FFF;
  }

  &.btn-secondary {
    background-color: #FFF;
    border: 1px solid #169BC5;
    color: #169BC5;
  }

  &.btn-default {
    background-color: #FFF;
    border: 1px solid #787878;
    color: #787878;
  }

  &.btn-danger {
    background-color: #B90000;
    border: 1px solid #B90000;
    color: #FFF;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
