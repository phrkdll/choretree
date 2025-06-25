import { z } from "zod"

export const CreateTaskRequestSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
})

export type CreateTaskRequest = z.infer<typeof CreateTaskRequestSchema>
