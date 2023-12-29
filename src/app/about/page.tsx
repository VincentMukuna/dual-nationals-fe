import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <div className=" mx-auto mt-8 flex max-w-3xl flex-col gap-10 ">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold uppercase">About Us</h1>
        <h2 className="max-w-2xl  leading-6 ">
          Change the way you find international futbol's next stars - there is a better way. Start
          searching today!
        </h2>
      </div>
      <Image
        src={'/static/images/france-sm.png'}
        width={1000}
        height={300}
        className=" aspect-video max-h-[25rem] overflow-hidden rounded-lg object-cover object-top"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="relative -mt-6 overflow-hidden py-8 opacity-90">
        <div className=" mt-2 flex flex-col  gap-10 md:flex-row">
          <div className="shrink-0 basis-[40%]  self-start border-s-2  border-green-600 pl-4 text-lg font-semibold tracking-wide ">
            Lets unravel the mechanics behind Dual Nationals
          </div>
          <div className="leading-relaxed  sm:max-w-md  lg:max-w-xl">
            Our platform is designed to make it easy for fans, players, and agents/administrators to
            quickly access information on players who are eligible to compete for a particular
            country's national team.
          </div>
        </div>
      </div>
      <Image
        src={'/static/images/desktop-demo.png'}
        width={800}
        height={500}
        className=" ] aspect-video overflow-hidden rounded-lg object-cover "
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="relative -mt-6 overflow-hidden py-8 opacity-90">
        <div className=" mt-2 flex flex-col  gap-10 md:flex-row">
          <div className="shrink-0 basis-[40%]  self-start border-s-2  border-blue-600 pl-4 text-lg font-semibold tracking-wide ">
            The most comprehensive database of players
          </div>
          <div className="leading-relaxed  sm:max-w-md  lg:max-w-xl">
            At Dual Nationals, we understand the importance of having accurate and up-to-date
            information when it comes to national team selection. Our team of experts is committed
            to providing you with the most comprehensive database of eligible players from around
            the world. Whether you're a fan looking to keep track of your team's prospects, a player
            seeking to represent your country of origin, or an agent/administrator searching for new
            talent, Dual Nationals is the perfect resource for you.
          </div>
        </div>
      </div>
      <Image
        src={'/static/images/mobile-demo.png'}
        width={800}
        height={500}
        className=" ] aspect-video overflow-hidden rounded-lg  object-cover"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="relative -mt-6 overflow-hidden py-8 opacity-90">
        <div className=" mt-2 flex flex-col  gap-10 md:flex-row">
          <div className="shrink-0 basis-[40%]  self-start border-s-2  border-blue-600 pl-4 text-lg font-semibold tracking-wide ">
            Finding the information you need has never been easier
          </div>
          <div className="leading-relaxed sm:max-w-md  lg:max-w-xl">
            Our database is constantly updated with new players and information, so you can be sure
            that you're always getting the most current data available. At Dual Nationals, we're
            passionate about the beautiful game and the role that national teams play in bringing
            people together from all walks of life. We believe that everyone should have the
            opportunity to represent their country of origin, and we're proud to provide a platform
            that helps make that dream a reality.
          </div>
        </div>
      </div>
    </div>
  )
}
