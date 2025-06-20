import antfu from "@antfu/eslint-config"

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(antfu({
	stylistic: {
		semi: false,
		indent: "tab",
		quotes: "double",
	},
	vue: true,
	typescript: true,
	formatters: true,
}, {
	rules: {
		"perfectionist/sort-imports": ["error", {
			tsconfigRootDir: ".",
		}],
		"unicorn/filename-case": ["error", {
			case: "kebabCase",
			ignore: ["README.md", "LICENSE.md"],
		}],
	},
}))
