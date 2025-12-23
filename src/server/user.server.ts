import { createServerFn } from '@tanstack/react-start'
import { authSchema } from '@/schemas/login.schema'

export const registerUser = createServerFn({ method: 'POST' })
  .inputValidator(authSchema)
  .handler(({ data }) => {
    console.log(data, 'user on server register')
    return data
  })

export const loginUser = createServerFn({ method: 'POST' })
  .inputValidator(authSchema)
  .handler(({ data }) => {
    console.log(data, 'user on server login')
    return data.password
  })
