'use client'
import CustomLink from '@/components/Link'
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
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
})

export default function page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset()
    router.replace('/', { scroll: false })
  }
  return (
    <main className="mx-auto mt-8 flex max-w-lg flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold uppercase">Login</h1>
        <h2>Welcom back, log in to your account</h2>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="self-stretch rounded-full font-semibold ">
            Login
          </Button>
          <div className="flex justify-center gap-1 text-sm">
            <span>Don't have an account?</span>
            <CustomLink href={'/register'} className="text-primary-400 hover:underline">
              Register
            </CustomLink>
          </div>
        </form>
      </Form>
    </main>
  )
}
