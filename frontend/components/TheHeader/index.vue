<template>
	<div class="top-header">
		<div class="top-header-wrapper">
			<div class="top-header-text">
				<p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
				<a href="">ShopNow</a>
			</div>
			<div class="top-header-language">
				<p>English</p>
				<IconArrowDown/>
			</div>
		</div>
	</div>
	<header class="header">
		<div class="header-wrapper">
			<div class="left">
				<div class="logo">Exclusive</div>
				<nav>
					<ul class="list-navigator">
						<li class="item-navigator">Home</li>
						<li class="item-navigator">Contact</li>
						<li class="item-navigator">About</li>
						<li class="item-navigator">Sign Up</li>
					</ul>
				</nav>
			</div>
			<div class="right">
				<div class="search-wrapper">
					<CSearch :class-name="'search-header'" :placeholder="'What are you looking for?'" @update:value="input = $event">
						<IconSearch />
					</CSearch>
				</div>
				<div class="icon-wrapper">
					<IconHeart/>
					<IconCart/>
					<IconUser/>
				</div>
			</div>
		</div>
	</header>
</template>
<script lang="ts" setup>
import IconArrowDown from "~/components/icons/IconArrowDown.vue";
import IconSearch from "~/components/icons/IconSearch.vue";
import IconHeart from "~/components/icons/IconHeart.vue";
import IconCart from "~/components/icons/IconCart.vue";
import IconUser from "~/components/icons/IconUser.vue";
import CSearch from "~/components/atoms/CSearch.vue";

const input = ref('')
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.top-header {
	background-color: $color_black;
	height: 48px;

	&-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: 100%;
	}

	&-text {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 8px;
		color: $color_text_1;
		font-size: 14px;
		line-height: 21px;

		a {
			color: $color_text_1;
		}
	}

	&-language {
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
		gap: 2px;
		color: $color_text_1;
		font-size: 14px;
		line-height: 21px;
		cursor: pointer;
	}
}

.header {
	height: 94px;
	border-bottom: 0.5px solid rgba(0, 0, 0, .30);

	&-wrapper {
		height: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {
			display: flex;
			align-items: center;
			gap: 160px;

			.logo {
				color: $color_black;
				font-size: 24px;
				line-height: 24px;
				cursor: pointer;
			}

			.list-navigator {
				display: flex;
				align-items: center;
				gap: 48px;

				.item-navigator {
					cursor: pointer;
					color: $color_black;
					font-size: 16px;
					line-height: 24px;
				}
			}
		}

		.right {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 24px;

			.search-wrapper {
				::v-deep(.search-header) {
					width: 243px;
					.el-input__wrapper {
						background-color: $color_secondary_1;
						box-shadow: none;

						::placeholder {
							color: rgba(0, 0, 0, 50%);
							font-size: 12px;
						}
					}
				}
			}

			.icon-wrapper {
				display: flex;
				align-items: center;
				gap: 16px;
			}
		}
	}
}
</style>
