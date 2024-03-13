<template>
	<footer>
		<div class="footer-container">
			<div class="subscribe">
				<div class="footer-navigation-menu">
					<div class="text-wrapper">
						<p class="text" style="font-size: 24px; font-weight: bold">Exclusive</p>
						<p class="text" style="font-size: 20px">Subscribe</p>
						<p class="text" style="font-size: 16px">Get 10% off your first order</p>
					</div>
					<div class="search-wrapper">
						<CSearch placeholder="Enter your email" class-name="footer-search" @update:value="input = $event">
							<IconSend></IconSend>
						</CSearch>
					</div>
				</div>
			</div>
			<FooterNavigationMenu :title="'Support'" :footer-navigations="listNavigationSupports"/>
			<FooterNavigationMenu :title="'Account'" :footer-navigations="listNavigationAccounts"/>
			<FooterNavigationMenu :title="'Quick Link'" :footer-navigations="listNavigationLinks"/>
			<div class="download">
				<p class="title">Download App</p>
				<div class="download-link">
					<p class="title">Save $3 with App New User Only</p>
					<GroupDownLoad/>
				</div>
				<div class="list-social-network">
					<IconFacebook/>
					<IconInstagram/>
					<IconX/>
					<IconLinkedln/>
				</div>
			</div>
		</div>
	</footer>
	<div class="footer-bottom">
		<p>Copyright Rimel 2022. All right reserved</p>
	</div>
</template>
<script setup lang="ts">
import FooterNavigationMenu from "~/components/molecules/FooterNavigationMenu.vue";
import IconSend from "~/components/icons/IconSend.vue";
import CSearch from "~/components/atoms/CSearch.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconLinkedln from "~/components/icons/IconLinkedln.vue";
import IconX from "~/components/icons/IconX.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import GroupDownLoad from "~/components/icons/GroupDownLoad.vue";

const input = ref("");
const listNavigationSupports = reactive([
	{
		title: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
		url: "",
	},
	{
		title: "exclusive@gmail.com",
		url: "",
	},
	{
		title: "+88015-88888-9999",
		url: "",
	},
])

const listNavigationAccounts = reactive([
	{
		title: "My Account",
		url: "",
	},
	{
		title: "Login / Register",
		url: "",
	},
	{
		title: "Cart",
		url: "",
	},
	{
		title: "Wishlist",
		url: "",
	},
	{
		title: "Shop",
		url: "",
	},
])

const listNavigationLinks = reactive([
	{
		title: "Privacy Policy",
		url: "",
	},
	{
		title: "Terms Of Use",
		url: "",
	},
	{
		title: "FAQ",
		url: "",
	},
	{
		title: "Contact",
		url: "",
	},
])
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

footer {
	background-color: #000000;
	padding: 80px 0 60px;

	.footer-container {
		max-width: 1200px;
		display: flex;
		margin: 0 auto;
		align-items: flex-start;
		justify-content: space-between;

		::v-deep(.footer-search) {
			width: 217px;

			.el-input__wrapper {
				background-color: $color_black;
				box-shadow: 0 0 0 1px $color_text_1;

				::placeholder {
					color: rgba(250, 250, 250, 40%);
					font-size: 12px;
				}
			}
		}

		.subscribe {
			.footer-navigation-menu {
				display: flex;
				flex-direction: column;
				gap: 16px;

				.text-wrapper {
					display: flex;
					flex-direction: column;
					gap: 24px;
					align-items: flex-start;

					.text {
						line-height: 24px;
						color: $color_text_1;
					}
				}

			}
		}

		.download {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: flex-start;

			.title {
				font-size: 20px;
				line-height: 24px;
				color: $color_text_1;
			}

			.download-link {
				display: flex;
				flex-direction: column;
				gap: 8px;

				.title {
					font-size: 12px;
					line-height: 18px;
					color: $color_text_1;
					opacity: 70%;
				}
			}

			.list-social-network {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 24px;
			}
		}
	}
}

.footer-bottom {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px 0 24px;
	color: rgba(255, 255, 255, 50%);
	font-size: 16px;
	line-height: 24px;
	background-color: #000000;
	border-top: 1px solid rgba(255, 255, 255, 40%);
}
</style>
