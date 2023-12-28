import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TailwindIndicator } from '@/components/utils/tailwind-indicator'
import SectionContainer from '@/components/SectionContainer'
import BreadCrumbs from '@/components/BreadCrumbs'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dual Nationals',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-black">
      <body className={`${poppins.className} bg-slate-900/60 text-gray-300 antialiased`}>
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Header />
            <SectionContainer>
              <BreadCrumbs />
              {children}
            </SectionContainer>
          </div>

          <Footer />
          <TailwindIndicator />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
