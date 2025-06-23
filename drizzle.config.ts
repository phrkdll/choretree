import "dotenv/config"
import { defineConfig } from "drizzle-kit"

import env from "./lib/env"

export default defineConfig({
	out: "./lib/db/migrations",
	schema: "./lib/db/schema/index.ts",
	dialect: "turso",
	dbCredentials: {
		url: env.TURSO_DB_URL,
		authToken: env.TURSO_AUTH_TOKEN,
	},
	casing: "snake_case",
})
