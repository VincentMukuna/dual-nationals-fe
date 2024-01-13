import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="relative mx-auto mt-20 w-full  max-w-4xl px-4 py-2 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </section>
  )
}
