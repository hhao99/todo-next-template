import { z } from 'zod'

const TodoSchema = z.object({
    id: z.string().uuid(),
    task: z.string(),
    complete: z.boolean().default(false)
})

export type Todo = z.infer<typeof TodoSchema>