'use client'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ClearFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  function handleClearFilters() {
    router.push(`${pathname}`, { scroll: false })
  }
  return (
    <Button
      variant={'link'}
      onClick={() => handleClearFilters()}
      className="p-0 text-xs dark:text-primary-500"
    >
      Clear Filters
    </Button>
  )
}
