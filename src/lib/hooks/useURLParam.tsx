import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
export default function useURLParam() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = useDebouncedCallback((param: string, value: string | number) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set(param, value.toString())
    } else {
      params.delete(param)
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300)

  const handleMultipleChanges = useDebouncedCallback((...changes: [string, string][]) => {
    const params = new URLSearchParams(searchParams)

    for (const change of changes) {
      if (change[1]) {
        params.set(change[0], change[1])
      } else {
        params.delete(change[0])
      }
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300)

  return { handleChange, handleMultipleChanges, searchParams, router, pathname }
}
