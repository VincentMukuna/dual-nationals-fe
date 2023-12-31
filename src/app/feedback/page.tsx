'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Dialog, DialogContent, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Button } from '@/components/ui/button'
import { ComboBox } from '../../components/ui/combo-box'
import { useState } from 'react'

const feedbackPurposes = ['error-message', 'feature-request', 'account-issues'] as const

const formSchema = z.object({
  purpose: z.enum(feedbackPurposes, { required_error: 'Select a feedback purpose' }),
  fullname: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must contain at least 2 characters' })
    .max(50, { message: 'Name should be less than 50 characters long' }),
  phoneNo: z.string().min(2, { message: 'Phone number must contain at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(2, { message: 'Message must contain at least 2 characters' }),
})

export default function ContactUS() {
  const [showDialog, setShowDialog] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      phoneNo: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setShowDialog(true)
    form.reset()
  }
  return (
    <main className="mx-auto mt-8 flex flex-col gap-6 md:max-w-xl">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold uppercase">Provide Feedback</h1>
        <h2>Please complete the form below with your feedback</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose</FormLabel>
                <FormControl>
                  <ComboBox
                    label="Select purpose"
                    name="purpose"
                    values={[
                      { label: 'I have a question about an error message', value: 'error-message' },
                      { label: 'I have a feature request', value: 'feature-request' },
                      { label: 'I have problems with my account', value: 'account-issues' },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="self-stretch rounded-full font-semibold sm:self-end">
            Send Message
          </Button>
        </form>
      </Form>
      <Dialog open={showDialog} onOpenChange={(open) => setShowDialog(open)}>
        <DialogContent className="flex max-w-xs flex-col items-center rounded-md text-center sm:max-w-sm">
          <div className="flex aspect-square items-center justify-center rounded-full border-none bg-green-400/80 p-3">
            <svg
              className="h-7 w-7"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.5919 15.0919L19.5919 39.092C19.3829 39.3017 19.1345 39.4681 18.861 39.5817C18.5875 39.6953 18.2943 39.7537 17.9981 39.7537C17.702 39.7537 17.4088 39.6953 17.1353 39.5817C16.8618 39.4681 16.6134 39.3017 16.4044 39.092L5.90438 28.592C5.69509 28.3827 5.52907 28.1342 5.4158 27.8607C5.30253 27.5873 5.24423 27.2942 5.24423 26.9982C5.24423 26.7022 5.30253 26.4091 5.4158 26.1357C5.52907 25.8622 5.69509 25.6137 5.90438 25.4045C6.11368 25.1952 6.36215 25.0291 6.6356 24.9159C6.90906 24.8026 7.20215 24.7443 7.49814 24.7443C7.79412 24.7443 8.08721 24.8026 8.36067 24.9159C8.63412 25.0291 8.88259 25.1952 9.09189 25.4045L18 34.3126L40.4081 11.9082C40.8308 11.4855 41.4041 11.248 42.0019 11.248C42.5997 11.248 43.1729 11.4855 43.5956 11.9082C44.0183 12.3309 44.2558 12.9042 44.2558 13.502C44.2558 14.0997 44.0183 14.673 43.5956 15.0957L43.5919 15.0919Z"
                fill="white"
              />
            </svg>
          </div>
          Thank you for your submission. Our team will come back to you shortly.
          <DialogFooter>
            <DialogClose asChild>
              <Button className="font-semibold dark:text-black">Continue</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
