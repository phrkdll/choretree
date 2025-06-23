import { createAuthClient } from "better-auth/vue"
import { defineStore } from "pinia"

const authClient = createAuthClient()

export const useAuthStore = defineStore("useAuthStore", () => {
	async function login(provider: "github" | "discord") {
		await authClient.signIn.social({
			provider,
			callbackURL: "/dashboard",
		})
	}

	async function logout() {
		await authClient.signOut()
	}

	function useSession() {
		return authClient.useSession()
	}

	return {
		login,
		logout,
		useSession,
	}
})
