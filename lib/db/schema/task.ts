import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core"

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v7 } from "uuid"

import { user } from "./auth"

export const task = sqliteTable("tasks", {
	id: text().primaryKey().$defaultFn(() => v7()),
	title: text().notNull(),
	createdAt: int({ mode: "timestamp_ms" }).$defaultFn(() => new Date()).notNull(),
	createdBy: text().references(() => user.id).notNull(),
	updatedAt: int({ mode: "timestamp_ms" }).$defaultFn(() => new Date()).$onUpdateFn(() => new Date()).notNull(),
	updatedBy: text().references(() => user.id).notNull(),
	parentId: text().references((): AnySQLiteColumn => task.id),
	deadline: int({ mode: "timestamp_ms" }),
	assignedTo: text().references(() => user.id),
	completed: int({ mode: "boolean" }).$defaultFn(() => false).notNull(),
	description: text(),
})
