// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true },
	typescript: {
		strict: true,
	},
	app: {
		head: {
			title: "Base Nuxt.js 3 TypeScript project",
			htmlAttrs: {
				lang: "ja",
			},
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
				},
				{
					charset: "utf-8",
				},
			],
			link: [
				{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
				{rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: ''},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				},
			], //fontsize
		},
	},
	modules: ["@element-plus/nuxt", "@pinia/nuxt"],
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			"defineStore", // import { defineStore } from 'pinia'
			["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	plugins: ["@/plugins/i18n"],
	css: ["@/assets/scss/index.scss"],
	runtimeConfig: {
		public: {
			NUXT_APP_I18N_LOCALE: process.env.NUXT_APP_I18N_LOCALE,
			NUXT_APP_I18N_FALLBACK_LOCALE: process.env.NUXT_APP_I18N_FALLBACK_LOCALE,
			baseURL: process.env.NUXT_API_URL,
		},
	},
	vite: {
		server: {
			hmr: {
				protocol: "ws",
				host: "localhost",
				port: 24678,
			},
		},
	},
})
