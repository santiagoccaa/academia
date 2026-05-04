import { z } from "zod"

export const formSchema = z.object({
    title: z.email().min(2).max(200),
    name: z.string().min(2).max(200),
    message: z.string().max(600)
})