import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v7 } from "uuid"

import { user } from "./auth"

export const task = sqliteTable("tasks", {
	id: text().primaryKey().$defaultFn(() => v7()),
	createdBy: text().references(() => user.id),
	title: text().notNull(),
	createdAt: int().$defaultFn(() => Date.now()).notNull(),
	updatedAt: int().$defaultFn(() => Date.now()).$onUpdateFn(() => Date.now()).notNull(),
})
