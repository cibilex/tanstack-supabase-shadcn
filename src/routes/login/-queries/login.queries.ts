import { useMutation } from '@tanstack/react-query'
import type { IAuthSchema } from '@/schemas/login.schema'
import { loginUser } from '@/server/user.server'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: IAuthSchema) => loginUser({ data }),
    onSuccess: (data) => {
      console.log(data, 'data created login')
    },
    onError: (error) => {
      console.log(error, 'error created login')
    },
  })
}
