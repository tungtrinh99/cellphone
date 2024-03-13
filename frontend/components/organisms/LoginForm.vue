<template>
	<div class="form-login">
		<div class="form-login-top">
			<p class="title">Log in to Exclusive</p>
			<p class="sub-title">Enter your details below</p>
		</div>
		<div class="form">
			<el-input class="login-input" placeholder="Email or Phone Number" v-model="form.email"></el-input>
			<el-input class="login-input" placeholder="Password" v-model="form.password"></el-input>
			<div class="button-wrapper">
				<CButton class-name="button-login">Log In</CButton>
				<CLink class-name="forget-password-link" target="_blank" title="Forget Password?"/>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import CButton from "~/components/atoms/CButton.vue";
import CLink from "~/components/atoms/CLink.vue";

const form = reactive({
	email: "",
	password: "",
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.form-login {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 48px;

	&-top {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;

		.title {
			font-size: 36px;
			font-weight: 500;
			line-height: 30px;
			color: $color_black;
		}

		.sub-title {
			font-size: 16px;
			line-height: 24px;
			color: $color_black;
		}
	}

	.form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 40px;

		::v-deep(.login-input) {
			.el-input__wrapper {
				box-shadow: none;
				border-bottom: 1px solid rgba(0, 0, 0, 50%);
				border-radius: 0;
				padding: 1px 11px 1px 0;
			}
		}

		.button-wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			::v-deep(.button-login) {
				width: 143px;
				height: 56px;
				background-color: $color_button_2;
				border: none;
			}

			::v-deep(.forget-password-link) {
				color: $color_button_2;
				font-size: 16px;
				text-decoration-line: none;
				cursor: pointer;
				font-weight: normal;
			}
		}
	}
}
</style>