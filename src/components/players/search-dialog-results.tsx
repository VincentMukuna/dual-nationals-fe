import { fetchPlayers } from '@/lib/data'
import React from 'react'
import { CommandEmpty, CommandItem, CommandList } from '../ui/command'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Player } from '@/lib/schemas'
import {
  PlayerCard,
  PlayerCardAge,
  PlayerCardAvatar,
  PlayerCardClubLogo,
  PlayerCardName,
  PlayerCardPosition,
  PlayerCardPriceTag,
} from '@/app/(homepage)/PlayerCard'
import CustomLink from '../Link'

export default async function SearchResults({ query }: { query: string }) {
  const players = await fetchPlayers(`name_like=${query || ''}&_limit=3`)
  return (
    <CommandList className="border-t border-gray-800 pt-2">
      <CommandEmpty>No such players</CommandEmpty>
      {players.map((player: Player) => (
        <CommandItem key={player.id} value={player.name} className=" relative p-0">
          <>
            <CustomLink href={`/players/${player.id}`} className="absolute inset-0" />
            <PlayerCard player={player} className="  w-full border-none p-0 dark:bg-inherit">
              <div className="flex gap-2 ">
                <PlayerCardAvatar />
                <div className="flex flex-col gap-1">
                  <PlayerCardName />
                  <div className="flex items-center gap-2">
                    <PlayerCardClubLogo className="h-6 w-6" />
                    <span>{` • `}</span>
                    <PlayerCardPosition className="text-gray-400" />
                    <span>{` • `}</span>
                    <PlayerCardAge />
                    <span>{` • `}</span>
                    <PlayerCardPriceTag />
                  </div>
                </div>
              </div>
            </PlayerCard>
          </>
        </CommandItem>
      ))}
    </CommandList>
  )
}
