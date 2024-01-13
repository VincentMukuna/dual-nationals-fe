'use client'

import headerNavLinks from '@/data/headerNavLinks'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from './link'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={navShow} onOpenChange={(open) => setNavShow(open)}>
      <SheetTrigger className="focus:outline-none md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <SheetClose />
        <nav className=" mt-14 flex flex-col gap-4">
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font- rounded bg-gray-900 px-5 py-3 text-lg tracking-widest ${
                link.href === '/'
                  ? pathname === '/' && ' text-primary-600 '
                  : pathname.includes(link.href.split('/')[1])
                    ? ' text-primary-600 '
                    : 'text-gray-900  dark:text-gray-100'
              }`}
              onClick={() => setNavShow(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
