'use client'
import CustomLink from '@/components/link'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
  password2: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
})
export default function ForgotPasswordPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      password2: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset()
  }
  return (
    <main className="mx-auto mt-8 flex max-w-md flex-col gap-4">
      <CustomLink href={'/login'} className="relative right-6">
        <Button variant={'ghost'} className="h-10 w-10 p-0">
          <ArrowLeft />
        </Button>
      </CustomLink>
      <div className="space-y-1">
        <h1 className="text-xl font-semibold ">Create New Password</h1>
        <h2>New password should be different from previously used passwords</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="New password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Repeat password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="self-stretch rounded-full font-semibold ">
            Change Password
          </Button>
        </form>
      </Form>
    </main>
  )
}
