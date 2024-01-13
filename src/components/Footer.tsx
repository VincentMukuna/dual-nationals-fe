import SocialIcon from '@/components/icons/social-icons'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Logo from './icons/logo'
import Link from './link'

export default function Footer() {
  return (
    <footer className="mt-4 bg-neutral-950/80 p-10">
      <div className="flex flex-col-reverse justify-between gap-6 text-gray-400 lg:flex-row ">
        <div className="flex flex-col justify-between gap-y-2 md:flex-row lg:flex-col ">
          <div className="flex flex-col items-center gap-x-3 text-center md:flex-row md:items-start md:text-start">
            <Logo className="h-20 w-20" />
            <div className="space-y-1 text-[.8rem] md:text-xs">
              <div className="font-semibold  uppercase md:text-lg ">{siteMetadata.title}</div>
              <div className=" ">{`© ${siteMetadata.title} ${new Date().getFullYear()}.`}</div>
              <div> All rights reserved</div>

              <div className="flex gap-x-4 dark:text-gray-400 ">
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4 self-center md:self-start">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
        </div>
        <div>
          <nav className="flex flex-col gap-x-4 gap-y-4 md:flex-row">
            {headerNavLinks.map((link) => (
              <Link key={link.title} href={link.href} className=" text-sm">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
