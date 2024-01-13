import BreadCrumbs from '@/components/breadcrumbs'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SectionContainer from '@/components/section-container'
import { Toaster } from '@/components/ui/toaster'
import { TailwindIndicator } from '@/components/utils/tailwind-indicator'
import siteMetadata from '@/data/siteMetadata'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-black">
      <Providers>
        <body className={` bg-gray-950 text-gray-300 antialiased`}>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <Header />
              <SectionContainer>
                <BreadCrumbs />
                <main>{children}</main>
              </SectionContainer>
            </div>

            <Footer />
            <TailwindIndicator />
          </div>
          <Toaster />
        </body>
      </Providers>
    </html>
  )
}
