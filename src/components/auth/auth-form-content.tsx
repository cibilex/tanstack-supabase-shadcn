import { LogIn, RectangleEllipsis, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from '../ui/spinner'
import type { AuthFormProps } from '.'
import { authSchema } from '@/schemas/login.schema'
import { Button } from '@/components/ui/button'

import { Input, InputWrapper } from '@/components/ui/input'
import { CardContent, CardFooter } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FieldSet } from '@/components/ui/field'

export function AuthFormContent({
  submitButtonText,
  handleSubmit,
  disabled,
}: Pick<AuthFormProps, 'handleSubmit' | 'disabled' | 'submitButtonText'>) {
  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    disabled,
  })

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent>
            <FieldSet>
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      render={
                        <InputWrapper>
                          <User />
                          <Input
                            placeholder="Please enter your email..."
                            {...field}
                          />
                        </InputWrapper>
                      }
                    ></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      render={
                        <InputWrapper>
                          <RectangleEllipsis />
                          <Input
                            type="password"
                            placeholder="Please enter your password..."
                            {...field}
                          />
                        </InputWrapper>
                      }
                    ></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldSet>
          </CardContent>

          <CardFooter className="flex-col gap-2 mt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={disabled}
            >
              {disabled ? (
                <Spinner />
              ) : (
                <>
                  <LogIn />
                  {submitButtonText}
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  )
}
