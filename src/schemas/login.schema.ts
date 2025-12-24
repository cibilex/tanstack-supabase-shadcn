import { z } from 'zod'

export const authSchema = z.object({
  email: z.email().max(50),
  password: z.string().min(8).max(20),
})

export type IAuthSchema = z.infer<typeof authSchema>
