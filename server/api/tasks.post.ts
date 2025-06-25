import { auth } from "~/lib/auth"
import db from "~/lib/db"
import { task } from "~/lib/db/schema"
import { CreateTaskRequestSchema } from "~/types/task"

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, CreateTaskRequestSchema.safeParse)
	const session = await auth.api.getSession({ headers: event.headers })

	const userId = session?.user.id

	type NewTask = typeof task.$inferInsert

	if (body.success) {
		await db.insert(task).values({
			title: body.data.title,
			createdBy: userId,
			updatedBy: userId,
		} as NewTask)
	}
})
