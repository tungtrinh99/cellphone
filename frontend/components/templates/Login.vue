<template>
	<div class="template-login">
		<div class="background">
			<img :src="LoginBackground" alt="login-background">
		</div>
		<LoginForm />
	</div>
</template>
<script setup lang="ts">
import LoginBackground from "@/assets/images/login.png";
import LoginForm from "~/components/organisms/LoginForm.vue";
</script>
<style lang="scss" scoped>
.template-login {
	padding: 60px 0 140px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>