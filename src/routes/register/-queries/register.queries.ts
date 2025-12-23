import { useMutation } from '@tanstack/react-query'
import type { IAuthSchema } from '@/schemas/login.schema'
import { registerUser } from '@/server/user.server'

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: IAuthSchema) => registerUser({ data }),
    onSuccess: (data) => {
      console.log(data, 'data created register')
    },
    onError: (error) => {
      console.log(error, 'error created register')
    },
  })
}
