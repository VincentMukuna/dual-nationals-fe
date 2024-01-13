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
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})
export default function ForgotPasswordPage() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset()
    router.replace('/reset-password')
  }
  return (
    <main className="mx-auto mt-8 flex max-w-md flex-col gap-4">
      <CustomLink href={'/login'} className="relative right-6">
        <Button variant={'ghost'} className="h-10 w-10 p-0">
          <ArrowLeft />
        </Button>
      </CustomLink>
      <div className="space-y-1">
        <h1 className="text-xl font-semibold ">Forgot Password</h1>
        <h2>We will send you a password reset link to your email</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="self-stretch rounded-full font-semibold ">
            Send Link
          </Button>
          <div className="flex justify-center gap-1 text-sm">
            <span>Didn&apos;t receive the link?</span>
            <CustomLink href={'/forgot-password'} className="text-primary-400 hover:underline">
              Try again
            </CustomLink>
          </div>
        </form>
      </Form>
    </main>
  )
}
