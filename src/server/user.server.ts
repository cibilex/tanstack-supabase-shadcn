import { createServerFn } from '@tanstack/react-start'
import { authSchema } from '@/schemas/login.schema'
import { getSupabaseServerClient } from '@/lib/supabase/server'

export const registerUser = createServerFn({ method: 'POST' })
  .inputValidator(authSchema)
  .handler(async ({ data: { email, password } }) => {
    const supabase = getSupabaseServerClient()
    const { data: dbData, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      throw new Error(error.message || 'Failed to register user')
    }
    return true
  })

export const loginUser = createServerFn({ method: 'POST' })
  .inputValidator(authSchema)
  .handler(async ({ data: { email, password } }) => {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      throw new Error(error.message || 'Failed to login user')
    }
    return true
  })

export type IUser = {
  email: string
  id: string
  createdAt: string
}
export const getUser = createServerFn({ method: 'GET' }).handler(
  async (): Promise<IUser | null> => {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      // if user not found return null
      return null
    }
    const { email, id, created_at } = data.user
    return {
      email: email || '',
      id,
      createdAt: created_at,
    }
  },
)

export const logoutUser = createServerFn({ method: 'POST' }).handler(
  async () => {
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw new Error(error.message || 'Failed to logout user')
    }

    return true
  },
)
