'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button } from './button'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative flex w-full items-center">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          className={cn(
            'relative flex  w-full rounded-md  bg-white px-3 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:bg-gray-900 dark:ring-offset-gray-950 dark:placeholder:text-gray-600 dark:focus-visible:ring-primary-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <Button
            variant={'ghost'}
            className=" absolute right-1
rounded-md "
            onClick={() => setShowPassword((val) => !val)}
          >
            {showPassword ? (
              <EyeOffIcon className=" h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className=" h-5 w-5 text-gray-500" />
            )}{' '}
          </Button>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
