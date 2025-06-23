/* eslint-disable node/prefer-global/process */
import { z } from "zod"

export const EnvSchema = z.object({
	NODE_ENV: z.string(),
	TURSO_DB_URL: z.string(),
	TURSO_AUTH_TOKEN: z.string().optional(),
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
