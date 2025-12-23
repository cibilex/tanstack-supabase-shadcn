import { z } from 'zod'

export const authSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(20),
})

export type IAuthSchema = z.infer<typeof authSchema>
