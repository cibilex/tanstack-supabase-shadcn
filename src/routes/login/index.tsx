import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'

import type { IAuthSchema } from '@/schemas/login.schema'
import AuthForm from '@/components/auth'
import { useLoginMutation } from '@/queries/user.queries'

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useLoginMutation()
  const handleSubmit = (data: IAuthSchema) => {
    if (isPending) return
    toast.promise(
      mutateAsync(data).then(() => {
        navigate({ to: '/' })
      }),
      {
        loading: 'Logging in...',
        success: 'Login successful',
        error: (error) =>
          error instanceof Error ? error.message : 'Login failed',
      },
    )
  }
  return (
    <AuthForm
      title="Sign In"
      description="Enter your email and password to sign in to your account."
      handleSubmit={handleSubmit}
      disabled={isPending}
      submitButtonText="Sign in"
    />
  )
}
