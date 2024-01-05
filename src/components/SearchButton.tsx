'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DialogProps } from '@radix-ui/react-dialog'
import { fetchPlayers } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import { useDebouncedCallback } from 'use-debounce'
import CustomLink from './Link'

export default function Search({ ...props }: DialogProps) {
  // React.useEffect(() => {
  //   const down = (e: KeyboardEvent) => {
  //     if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
  //       if (
  //         (e.target instanceof HTMLElement && e.target.isContentEditable) ||
  //         e.target instanceof HTMLInputElement ||
  //         e.target instanceof HTMLTextAreaElement ||
  //         e.target instanceof HTMLSelectElement
  //       ) {
  //         return
  //       }

  //       e.preventDefault()
  //     }
  //   }

  //   document.addEventListener('keydown', down)
  //   return () => document.removeEventListener('keydown', down)
  // }, [])

  return (
    <CustomLink
      href="/players/search"
      scroll={false}
      className={cn(
        'bg-background text-muted-foreground relative flex h-10 w-full  items-center justify-start rounded-full text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64'
      )}
    >
      <span className="inline-flex">Search for players...</span>
      <kbd className="bg-muted pointer-events-none absolute right-[0.3rem] top-[0.6rem] hidden h-5 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </CustomLink>
  )
}
