<template>
	<div class="form-login">
		<div class="form-login-top">
			<p class="title">Create an account</p>
			<p class="sub-title">Enter your details below</p>
		</div>
		<div class="form">
			<el-input class="login-input" placeholder="Name" v-model="form.name"></el-input>
			<el-input class="login-input" placeholder="Email or Phone Number" v-model="form.email"></el-input>
			<el-input class="login-input" placeholder="Password" v-model="form.password"></el-input>
			<div class="form-bottom">
				<div class="button-container">
					<CButton class-name="button-login">Create Account</CButton>
					<CButton class-name="button-login-google">
						<IconGoogle/>
						Sign up with Google
					</CButton>
				</div>
				<div class="form-button-link">
					<p>Already have account?</p>
					<CLink class-name="login-link" target="_blank" title="Log In"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import CButton from "~/components/atoms/CButton.vue";
import CLink from "~/components/atoms/CLink.vue";
import IconGoogle from "~/components/icons/IconGoogle.vue";

const form = reactive({
	name: "",
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

		.form-bottom {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;

			.button-container {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 16px;
			}

			::v-deep(.button-login) {
				width: 100%;
				height: 56px;
				background-color: $color_button_2;
				border: none;
			}

			::v-deep(.button-login-google) {
				width: 100%;
				height: 56px;
				background-color: $color_white;
				color: rgba(0, 0, 0, 70%);
				border: 1px solid rgba(0, 0, 0, 40%);
				margin-left: 0;

				span {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 16px;
				}
			}

			::v-deep(.forget-password-link) {
				color: $color_button_2;
				font-size: 16px;
				text-decoration-line: none;
				cursor: pointer;
				font-weight: normal;
			}

			.form-button-link {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				gap: 16px;
				font-size: 16px;
				color: rgba(0, 0, 0, 70%);

				a {
					font-weight: 500;
					text-decoration-line: none;
					color: $color_black;
				}
			}
		}
	}
}
</style>