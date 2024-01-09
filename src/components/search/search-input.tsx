'use client'
import useURLParam from '@/lib/hooks/useURLParam'
import { useState } from 'react'
import { Input } from '../ui/input'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

export default function SearchInput() {
  const [searchCategory, setSearchCategory] = useState('player')

  const { handleChange: handleSearch, searchParams } = useURLParam()
  return (
    <div className="relative flex items-center text-sm ">
      <ToggleGroup
        type="single"
        className="absolute z-10 gap-0 -space-x-[0.22rem]  last:rounded-l-none"
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
        defaultValue={searchParams.get('name_like') || ''}
        onChange={(e) => handleSearch('name_like', e.target.value)}
        className=" border-none pl-28 text-xs md:text-sm"
        placeholder={`Search by ${searchCategory} name `}
        autoFocus
      />
    </div>
  )
}
