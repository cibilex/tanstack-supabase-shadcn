import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import type { IAuthSchema } from '@/schemas/login.schema'
import AuthForm from '@/components/auth'
import { useRegisterMutation } from '@/queries/user.queries'

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useRegisterMutation()
  const handleSubmit = (data: IAuthSchema) => {
    if (isPending) return
    toast.promise(
      mutateAsync(data).then(() => {
        navigate({ to: '/' })
      }),
      {
        loading: 'Registering...',
        success:
          'Register successful.Please check your email for verification.',
        error: (error) =>
          error instanceof Error ? error.message : 'Register failed',
      },
    )
  }
  return (
    <AuthForm
      title="Sign Up"
      description="Enter your email and password to create your account."
      handleSubmit={handleSubmit}
      disabled={isPending}
      submitButtonText="Sign up"
    />
  )
}
