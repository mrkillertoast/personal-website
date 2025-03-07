// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: [ '~/assets/css/tailwind.css', '~/assets/css/main.css' ],
	modules: [ '@nuxtjs/tailwindcss', 'shadcn-nuxt' ],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui'
	}
});