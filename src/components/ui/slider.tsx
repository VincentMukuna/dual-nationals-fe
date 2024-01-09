'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const value = props.value || props.defaultValue
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <SliderPrimitive.Range className="absolute h-full bg-gray-900 dark:bg-primary-600" />
      </SliderPrimitive.Track>
      {value?.map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="bg-whitering-offset-white focus-visible:ring-primary-6 00 block  h-3 w-3 rounded-full border-gray-900  ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-50 dark:bg-primary-600 "
        />
      ))}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
