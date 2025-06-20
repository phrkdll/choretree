import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
	eslint: {
		config: {
			standalone: false,
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	css: ["~/assets/css/main.css"],
	colorMode: {
		dataValue: "theme",
	},
})
