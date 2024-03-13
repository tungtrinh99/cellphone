<template>
  <div class="footer-navigation-menu">
    <p class="title">{{ props.title }}</p>
    <ul class="list-menu">
      <li v-for="(item, index) in props.footerNavigations" :key="index" class="item-menu">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface FooterNavigations {
  title: string
  url: string
}

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  footerNavigations: {
    type: Array<FooterNavigations>,
    required: true,
    default: [],
  },
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.footer-navigation-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
	max-width: 175px;

  .title {
    font-size: 20px;
    font-weight: 500;
    color: $color_text_1;
		margin: 0;
  }

  .list-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .item-menu {
      a {
				font-size: 16px;
				color: $color_text_1;
				text-decoration-line: none;
			}
    }
  }
}
</style>
