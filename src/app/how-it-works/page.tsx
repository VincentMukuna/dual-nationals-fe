import { SVGLogo } from '@/components/icons'
import steps from '@/data/steps'
import Image from 'next/image'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'How it Works' })

export default function HowItWorksPage() {
  return (
    <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-10 ">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold uppercase">How it works</h1>
        <h2 className="max-w-2xl  leading-6 ">
          Change the way you find international futbol&apos;s next stars - there is a better way.
          Start searching today!
        </h2>
      </div>

      <Image
        src={'/static/images/holding-phone.png'}
        width={1000}
        height={300}
        className="aspect-video max-h-[25rem] overflow-hidden rounded-lg object-cover md:aspect-auto "
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="relative  overflow-hidden py-8 opacity-90">
        <div className=" mt-2 flex  flex-col gap-10">
          <p className=" max-w-[24rem] border-s-2  border-green-600 py-2 pl-4 font-semibold tracking-wide">
            Lets unravel the mechanics behind Dual Nationals
          </p>
          <SVGLogo className=" absolute bottom-3 right-0  -z-20" />
          <p className="leading-relaxed  sm:max-w-md ">
            Our platform is designed to make it easy for fans, players, and agents/administrators to
            quickly access information on players who are eligible to compete for a particular
            country&apos;s national team.
          </p>
        </div>
      </div>

      <ol className="relative flex flex-col items-center gap-20 md:my-20 md:ml-96 md:gap-52 md:border-s dark:border-gray-700">
        {steps.map((step, i) => (
          <HowItWorksStep key={i} i={i + 1} step={step} />
        ))}
      </ol>
    </div>
  )
}

function HowItWorksStep({ step, i }: { i: number; step: (typeof steps)[0] }) {
  return (
    <li className="flex flex-col justify-center gap-4 md:ms-14">
      <Image
        src={step.image}
        alt="step demo"
        width={300}
        height={200}
        className="h-auto rounded-xl sm:max-w-sm md:absolute md:-start-[23rem]"
      />
      <span className="absolute -start-5 hidden h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white ring-offset-[10px] ring-offset-transparent md:flex dark:bg-blue-900 dark:ring-gray-950">
        {i}
      </span>
      <div className="flex flex-col gap-3 md:gap-0">
        <h3 className="mb-1 flex items-center gap-4 text-lg font-semibold text-gray-900 dark:text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 md:hidden">
            {i}
          </div>
          {step.title}
        </h3>
        <p className="max-w-md text-base font-normal text-gray-500 dark:text-gray-400">
          {step.text}
        </p>
      </div>
    </li>
  )
}
