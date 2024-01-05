'use client'

import * as React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DialogProps } from '@radix-ui/react-dialog'
import { fetchPlayers } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import { useDebouncedCallback } from 'use-debounce'
import CustomLink from './Link'
import { Button } from './ui/button'
import { CommandDialog, CommandInput } from './ui/command'
import SearchResults from './players/search-dialog-results'

export default function Search({ ...props }: DialogProps) {
  const [showDialog, setShowDialog] = React.useState(false)
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
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setShowDialog(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant={'outline'}
        onClick={() => setShowDialog(true)}
        className={cn(
          'bg-background text-muted-foreground relative flex h-10 w-full  items-center justify-start rounded-full text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64'
        )}
      >
        <span className="inline-flex">Search for players...</span>
        <kbd className="bg-muted pointer-events-none absolute right-[0.3rem] top-[0.6rem] hidden h-5 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={showDialog}
        onOpenChange={(open) => {
          if (!open) {
            setShowDialog(false)
            router.back()
          }
        }}
        className="px-1"
      >
        <CommandInput
          onValueChange={handleSearch}
          defaultValue={searchParams.get('search') || ''}
          spellCheck={false}
          className=" "
        />
        <React.Suspense>
          <SearchResults query={searchParams.get('search') || ''} />
        </React.Suspense>
      </CommandDialog>
    </>
  )
}
