'use client'
import { useState } from 'react'
import { Input } from '../../components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '../../components/ui/toggle-group'
export default function PlayerSearchBox() {
  const [searchCategory, setSearchCategory] = useState('player')
  return (
    <section className=" relative flex flex-col justify-center  overflow-hidden  bg-[url('../../public/static/images/stadium.jpg')] bg-cover bg-right-bottom  p-3 ">
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-gray-950 from-30%  via-gray-950/70 to-transparent to-80%"></div>
      <div className="z-[2] flex flex-col gap-4">
        <div className=" w-2/3 font-semibold text-gray-300 sm:w-3/4 sm:text-2xl sm:font-semibold md:w-2/4 lg:font-bold">
          Start searching player or country on Dual Nationals
        </div>
        <div className="relative flex items-center text-sm ">
          <ToggleGroup
            type="single"
            className="absolute gap-0 -space-x-[0.22rem] last:rounded-l-none"
            value={searchCategory}
            onValueChange={(value) => setSearchCategory(value)}
          >
            <ToggleGroupItem value="player" className="rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 21 21"
                className="h-4 w-4"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"
                />
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="country" className="rounded-l-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 21 21"
                className="h-5 w-5"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.5 17.5v-11m0 0c.667-1.333 1.667-2 3-2c2 0 2 2 4 2c1.333 0 2.333-.333 3-1v6c-.667.667-1.667 1-3 1c-2 0-2-2-4-2c-1.333 0-2.333.667-3 2z"
                />
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
          <Input
            className=" border-none pl-28 text-xs sm:max-w-[80%] md:text-sm"
            placeholder={`Search by ${searchCategory} name `}
          />
        </div>
      </div>
    </section>
  )
}
