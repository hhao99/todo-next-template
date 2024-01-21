import { z } from 'zod'

export const TodoSchema = z.object({
    id: z.string().uuid(),
    task: z.string().min(6,{ message: "must >= 4"}),
    complete: z.boolean().default(false)
})

export type ITodo = z.infer<typeof TodoSchema>