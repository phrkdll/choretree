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
	<label class="btn btn-ghost btn-circle swap swap-rotate">
		<input v-model="isDark" type="checkbox">

		<Icon class="swap-on" name="tabler:sun" size="24" />
		<Icon class="swap-off" name="tabler:moon" size="24" />
	</label>
</template>
