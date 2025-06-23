import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v7 } from "uuid"

export const user = sqliteTable("users", {
	id: text().primaryKey().$defaultFn(() => v7()),
	name: text().notNull(),
	email: text().notNull().unique(),
	emailVerified: int({ mode: "boolean" }).$defaultFn(() => false).notNull(),
	image: text(),
	createdAt: int().$defaultFn(() => Date.now()).notNull(),
	updatedAt: int().$defaultFn(() => Date.now()).notNull(),
})

export const session = sqliteTable("sessions", {
	id: text().primaryKey().$defaultFn(() => v7()),
	expiresAt: int().notNull(),
	token: text().notNull().unique(),
	createdAt: int().notNull(),
	updatedAt: int().notNull(),
	ipAddress: text(),
	userAgent: text(),
	userId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
})

export const account = sqliteTable("accounts", {
	id: text().primaryKey().$defaultFn(() => v7()),
	accountId: text().notNull(),
	providerId: text().notNull(),
	userId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
	accessToken: text(),
	refreshToken: text(),
	idToken: text(),
	accessTokenExpiresAt: int(),
	refreshTokenExpiresAt: int(),
	scope: text(),
	password: text(),
	createdAt: int().notNull(),
	updatedAt: int().notNull(),
})

export const verification = sqliteTable("verifications", {
	id: text().primaryKey().$defaultFn(() => v7()),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: int().notNull(),
	createdAt: int().$defaultFn(() => Date.now()),
	updatedAt: int().$defaultFn(() => Date.now()),
})
