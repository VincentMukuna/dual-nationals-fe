'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import Logo from './icons/logo'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="fixed z-20 flex w-full justify-between space-x-2 bg-gray-900  p-4 shadow-xl ">
      <div className="flex gap-2">
        <MobileNav />
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2 ">
            <Logo />
            <div className="block">
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
                ? ' bg-primary-900/15 text-primary-600 '
                : 'text-gray-900  hover:bg-primary-900/25 hover:text-primary-400 dark:text-gray-100'
            } transition md:block`}
          >
            {link.title}
          </Link>
        ))}
        <div className="ml-4 flex gap-2">
          <SearchButton />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 36 36"
            className="h-7 w-7"
          >
            <path
              fill="currentColor"
              d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5"
              className="clr-i-outline clr-i-outline-path-1"
            />
            <path
              fill="currentColor"
              d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
              className="clr-i-outline clr-i-outline-path-2"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
