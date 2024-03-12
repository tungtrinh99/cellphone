<template>
  <el-tag :class="[
    'tag',
    props.type === 'success' ? 'tag-success' :
      props.type === 'danger' ? 'tag-danger' :
        props.type === 'default' ? 'tag-default' : '',
    props.className
  ]">
    {{ props.title }}
  </el-tag>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
type TagType = 'success' | 'danger' | 'default'
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String as PropType<TagType>,
    default: "",
    required: true
  },
  className: {
    type: String,
    default: ""
  }
})
</script>
<style lang="scss" scoped>
.tag {
  height: 28px;
  border-radius: 5px;
  background: #6DC285;
  color: #333;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;

  &.tag-success {
    background-color: #6DC285;
    border: 1px solid #6DC285;
  }

  &.tag-danger {
    background-color: #D5826B;
    border: 1px solid #D5826B;
  }

  &.tag-default {
    background-color: #BFC2C5;
    border: 1px solid #BFC2C5;
  }

}
</style>
