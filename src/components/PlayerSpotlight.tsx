import React from 'react'
import { fetchPlayers } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import PlayerCard from './PlayerCard'

export default async function PlayerSpotlight() {
  const players = await fetchPlayers('_limit=10')

  return (
    <section>
      <Carousel
        className="max-w-[25rem] overflow-x-hidden sm:max-w-2xl md:max-w-5xl xl:max-w-6xl "
        opts={{ align: 'start', dragFree: false }}
      >
        <div className="flex items-center justify-between ">
          <div className="font-semibold">Player Spotlight</div>
          <div className="flex gap-1">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-1">
          {players.map((player: any, index: any) => (
            <CarouselItem
              key={player.id}
              className="basis-[69%%] self-center pl-0 sm:basis-1/2 md:basis-[35%] xl:basis-[26%]"
            >
              <div className="p-1">
                <PlayerCard player={player} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
