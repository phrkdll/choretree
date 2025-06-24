<script setup lang="ts">
const authStore = useAuthStore()
const session = authStore.useSession()
</script>

<template>
	<div class="navbar bg-base-200 shadow-md">
		<div class="navbar-start">
			<NuxtLink to="/" class="btn btn-ghost text-xl flex items-center">
				<Icon name="tabler:home" size="24" />choretree
			</NuxtLink>
		</div>
		<div class="navbar-end gap-2">
			<AppThemeSwitcher />
			<div v-if="session.data" class="dropdown dropdown-end">
				<button class="btn btn-ghost btn-circle avatar">
					<div class="w-8 rounded-full">
						<img alt="avatar" :src="session.data.user.image ?? ''">
					</div>
				</button>
				<ul class="menu menu-md dropdown-content bg-base-300 rounded-box z-1 mt-2 w-52 p-2 shadow-md">
					<li>
						<button @click="authStore.logout()">
							Logout
						</button>
					</li>
				</ul>
			</div>
			<NuxtLink v-else to="/login" class="btn btn-ghost btn-circle">
				<Icon name="tabler:login" size="24" />
			</NuxtLink>
		</div>
	</div>
</template>
