'use client'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import { User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Logo from './icons/logo'
import { default as CustomLink, default as Link } from './link'
import MobileNav from './mobile-nav'
import SearchButton from './search/SearchButton'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="fixed z-20 flex w-full justify-between space-x-2 bg-gray-900  p-4 shadow-xl ">
      <div className="flex gap-2">
        <MobileNav />
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2 ">
            <Logo aria-label="App logo" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase">{siteMetadata.title}</p>
              <p className="hidden text-xs uppercase text-gray-300 sm:block">
                {siteMetadata.strapline}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`hidden flex-none rounded px-2 py-1 text-[0.8rem]  ${
              pathname.split('/').at(1) === link.href.slice(1)
                ? ' bg-primary-900/15 text-primary-500 '
                : 'text-gray-900  hover:bg-primary-900/25 hover:text-primary-400 dark:text-gray-100'
            } transition md:block`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="ml-4 flex items-center gap-2">
        <SearchButton />
        <CustomLink href={'/login'} aria-label="View account information">
          <User />
        </CustomLink>
      </div>
    </header>
  )
}

export default Header
