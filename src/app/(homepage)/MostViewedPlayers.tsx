import React from 'react'
import {
  PlayerCard,
  PlayerCardAvatar,
  PlayerCardClubLogo,
  PlayerCardEligibleFlags,
  PlayerCardNTLogo,
  PlayerCardName,
  PlayerCardPriceTag,
} from './PlayerCard'
import { fetchPlayers } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import _ from 'lodash'

export default async function MostViewedPlayers() {
  const players = await fetchPlayers('_limit=3')
  return (
    <section className="flex flex-col">
      <Carousel
        className="max-w-full overflow-x-hidden sm:max-w-2xl md:max-w-5xl xl:max-w-6xl "
        opts={{ align: 'start', dragFree: false }}
      >
        <div className="flex items-center justify-between ">
          <div className="text-lg font-semibold">Most Viewed Players</div>
        </div>

        <CarouselContent className="-ml-1 ">
          {players.map((player: any, index: any) => (
            <CarouselItem key={player.id} className="basis-[20rem] self-center pl-0 ">
              <div className="p-1">
                <PlayerCard player={player} className="flex items-center gap-4 p-2 text-gray-300">
                  <div className="relative">
                    <PlayerCardAvatar className="h-20 w-20" />
                    <PlayerCardClubLogo className="absolute bottom-0 right-0 h-7 w-7" />
                  </div>

                  <div className="flex flex-col gap-[0.3rem] text-xs">
                    <PlayerCardName className="gap-1 text-base" />
                    <PlayerCardPriceTag />
                    <div className="flex gap-2">
                      <PlayerCardNTLogo className="h-6 w-6" />
                      <PlayerCardEligibleFlags />
                    </div>
                  </div>
                </PlayerCard>
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

export function MostViewedPlayersSkeleton() {
  return (
    <Carousel
      className="max-w-full overflow-x-hidden sm:max-w-2xl md:max-w-5xl xl:max-w-6xl "
      opts={{ align: 'start', dragFree: false }}
    >
      <div className="flex items-center justify-between ">
        <div className="text-lg font-semibold">Most Viewed Players</div>
      </div>

      <CarouselContent className="-ml-1">
        {_.times(4).map((_, i) => (
          <CarouselItem key={i} className="basis-[17.3rem] self-center pl-0 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center gap-4 px-2 py-2">
                  <Skeleton className="h-20 w-20 rounded-md" />

                  <div className="flex basis-2/3 flex-col gap-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden justify-end gap-1 sm:flex ">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}
