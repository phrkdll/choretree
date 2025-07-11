/* eslint-disable node/prefer-global/process */
import { z } from "zod"

export const EnvSchema = z.object({
	NODE_ENV: z.string(),
	TURSO_DB_URL: z.string(),
	TURSO_AUTH_TOKEN: z.string().optional(),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.string(),
	GITHUB_CLIENT_ID: z.string(),
	GITHUB_CLIENT_SECRET: z.string(),
	DISCORD_CLIENT_ID: z.string(),
	DISCORD_CLIENT_SECRET: z.string(),
})

export type Env = z.infer<typeof EnvSchema>

function validateEnv(): Env {
	const env = EnvSchema.safeParse(process.env)
	if (env.success) {
		return env.data
	}

	let message = "Faulty envitonment configuration:\n\n"
	for (const i of env.error.issues) {
		message += `-> ${i.path} [${i.message}]\n`
	}
	console.error(message)

	process.exit(1)
}

export default validateEnv()
