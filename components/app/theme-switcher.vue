<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === "dark"
	},
	set(value: boolean) {
		colorMode.preference = value ? "dark" : "light"
	},
})
</script>

<template>
	<label class="swap swap-rotate mx-2">
		<!-- this hidden checkbox controls the state -->
		<input v-model="isDark" type="checkbox">

		<!-- sun icon -->
		<Icon class="swap-on" name="tabler:sun" size="24" />

		<!-- moon icon -->
		<Icon class="swap-off" name="tabler:moon" size="24" />
	</label>
</template>
