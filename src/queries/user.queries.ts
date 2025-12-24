import { useMutation } from '@tanstack/react-query'
import type { IAuthSchema } from '@/schemas/login.schema'
import { loginUser, logoutUser, registerUser } from '@/server/user.server'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: IAuthSchema) => loginUser({ data }),
  })
}

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: IAuthSchema) => registerUser({ data }),
  })
}

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => logoutUser(),
  })
}
