<script setup lang="ts">
const props = defineProps<{
	provider: "github" | "discord"
	class: string
}>()

const authStore = useAuthStore()

const providerIcon = `tabler:brand-${props.provider}`
</script>

<template>
	<button :class="`btn btn-wide hover:brightness-115 ${props.class}`" @click="authStore.login(provider)">
		<Icon :name="providerIcon" size="24" /><slot />
	</button>
</template>
