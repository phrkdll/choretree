<script setup lang="ts">
const authStore = useAuthStore()
const session = authStore.useSession()
</script>

<template>
	<div class="navbar bg-base-100 shadow-sm">
		<div class="navbar-start">
			<NuxtLink to="/" class="btn btn-ghost text-xl flex items-center">
				<Icon name="tabler:home" size="24" />choretree
			</NuxtLink>
		</div>
		<div class="navbar-end gap-2">
			<NuxtLink v-if="session.data" class="btn btn-ghost" @click="authStore.logout()">
				Logout
			</NuxtLink>
			<NuxtLink v-else to="/login" class="btn btn-ghost">
				Login
			</NuxtLink>
			<AppThemeSwitcher />
		</div>
	</div>
</template>
