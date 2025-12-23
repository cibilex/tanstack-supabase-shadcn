import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useLoginMutation } from './-queries/login.queries'

import type { IAuthSchema } from '@/schemas/login.schema'
import AuthForm from '@/components/auth'

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useLoginMutation()
  const handleSubmit = (data: IAuthSchema) => {
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
      description="Enter your username and password to sign in to your account."
      handleSubmit={handleSubmit}
      disabled={isPending}
      submitButtonText="Sign in"
    />
  )
}
