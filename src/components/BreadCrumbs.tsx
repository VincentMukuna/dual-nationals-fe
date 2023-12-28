'use client'
import { usePathname } from 'next/navigation'
import Link from './Link'
import React from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function BreadCrumbs() {
  const pathname = usePathname()
  if (pathname === '/') return null
  const links = pathname.split('/').map((link) => '/' + link)
  return (
    <div className="flex w-full items-center gap-1 text-sm">
      {links.map((link, i, arr) => {
        if (link === '/' + pathname.split('/').at(-1)) {
          return (
            <span key={link} className="text-primary-500/80">
              {headerNavLinks.find((navLink) => navLink.href === link)?.title}
            </span>
          )
        }
        return (
          <Link key={link} href={link} className={'flex items-center gap-1'}>
            {headerNavLinks.find((navLink) => navLink.href === link)?.title}{' '}
            {i !== arr.length - 1 && (
              <span>
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default BreadCrumbs
