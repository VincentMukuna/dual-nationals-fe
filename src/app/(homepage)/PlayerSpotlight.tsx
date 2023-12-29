import { fetchPlayers } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel'
import PlayerCard from './PlayerCard'

import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import _ from 'lodash'

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

export function PlayerSpotlightSkeleton() {
  return (
    <Carousel
      className="max-w-full overflow-x-hidden sm:max-w-2xl md:max-w-5xl xl:max-w-6xl "
      opts={{ align: 'start', dragFree: false }}
    >
      <div className="flex items-center justify-between ">
        <div className="text-lg font-semibold">Player Spotlight</div>
      </div>

      <CarouselContent className="-ml-1">
        {_.times(4).map((_, i) => (
          <CarouselItem key={i} className="basis-[17.3rem] self-center pl-0 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-6 py-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <Skeleton className="h-14 w-14 rounded-md" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </div>
                    <Skeleton className="h-8" />
                    <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs">
                      <Skeleton className="h-3" />
                    </div>
                  </div>
                  <Skeleton className="h-12" />
                  <Skeleton className="h-12" />
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
