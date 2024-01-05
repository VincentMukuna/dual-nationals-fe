'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ReactNode, forwardRef, useState } from 'react'
import { CommandDialog, CommandInput } from '../ui/command'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchDialog({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300)
  return (
    <CommandDialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          // router.back()
        }
      }}
      className="px-1"
    >
      <CommandInput onValueChange={handleSearch} spellCheck={false} className=" " />
      {children}
    </CommandDialog>
  )
}
