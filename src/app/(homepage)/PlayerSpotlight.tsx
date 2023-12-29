import React from 'react'
import { fetchPlayers } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel'
import PlayerCard from './PlayerCard'

export default async function PlayerSpotlight() {
  const players = await fetchPlayers('_limit=10')

  return (
    <section>
      <Carousel
        className="max-w-full overflow-x-hidden sm:max-w-2xl md:max-w-5xl xl:max-w-6xl "
        opts={{ align: 'start', dragFree: false }}
      >
        <div className="flex items-center justify-between ">
          <div className="text-lg font-semibold">Player Spotlight</div>
        </div>

        <CarouselContent className="-ml-1">
          {players.map((player: any, index: any) => (
            <CarouselItem key={player.id} className="basis-[17.3rem] self-center pl-0 ">
              <div className="p-1">
                <PlayerCard player={player} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden justify-end gap-1 sm:flex ">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  )
}
