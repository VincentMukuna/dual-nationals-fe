'use client'
import { Button } from '@/components/ui/button'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="dark my-16 flex flex-col  items-center justify-start text-center md:mt-24">
      <div className="space-x-2 pb-4 md:space-y-5">
        <h1 className="md:leading-14 text-6xl font-extrabold leading-9 tracking-tight text-gray-900  md:text-8xl dark:text-gray-100">
          500
        </h1>
      </div>
      <div className="max-w-xs sm:max-w-md ">
        <p className="mb-4 text-lg font-bold leading-normal sm:text-xl md:text-2xl">
          Sorry something went wrong.
        </p>
        <p className="mb-8 text-sm sm:text-base">
          Hold on while we work on restoring this feature soon.
        </p>
        <Button onClick={() => reset()} className="rounded-md dark:bg-primary-500 dark:text-white">
          Try Again
        </Button>
      </div>
    </div>
  )
}
