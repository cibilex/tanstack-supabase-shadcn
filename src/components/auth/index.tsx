import { AuthFormContent } from './auth-form-content'
import type { IAuthSchema } from '@/schemas/login.schema'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export type AuthFormProps = {
  title: string
  description: string
  handleSubmit: (data: IAuthSchema) => void
  disabled: boolean
  submitButtonText: string
}

function AuthForm({
  title,
  description,
  handleSubmit,
  disabled,
  submitButtonText,
}: AuthFormProps) {
  return (
    <Card className="w-full  min-w-md max-w-lg m-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-center  w-full">
          {description}
        </CardDescription>
      </CardHeader>
      <AuthFormContent
        submitButtonText={submitButtonText}
        handleSubmit={handleSubmit}
        disabled={disabled}
      />
    </Card>
  )
}

export default AuthForm
