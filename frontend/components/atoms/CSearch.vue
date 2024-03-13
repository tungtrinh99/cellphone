<template>
	<el-input :class="['c-input', props.className]" v-model="input" :placeholder="props.placeholder">
		<template #suffix>
			<slot @click="$emit('submit', input)"/>
		</template>
	</el-input>
</template>
<script setup lang="ts">
const props = defineProps({
	placeholder: {
		type: String,
		required: true,
		default: ""
	},
	className: {
		type: String,
		required: false,
	}
})
const emit = defineEmits(["update:value", "submit"])

const input = ref("")

watch(
	() => input.value,
	() => {
		emit("update:value", input.value)
	}
)
</script>
<style lang="scss" scoped>
.c-input {
	::v-deep(.el-input__suffix) {
		cursor: pointer;
	}
}
</style>