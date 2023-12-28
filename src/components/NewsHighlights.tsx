'use client'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import { type CarouselApi } from '@/components/ui/carousel'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import placeholderImage from '../../public/static/images/manager-unsplash.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NEWS_AUTOPLAY_DELAY = 60 * 1000

export default function NewsHighlights() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      console.log('current')
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: NEWS_AUTOPLAY_DELAY,
        }),
      ]}
      className="flex flex-col gap-2  "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="ml-0 basis-[93%]">
            <div className="">
              <div className="relative  flex  overflow-hidden rounded-xl md:aspect-[7/3]">
                <div
                  className={cn(
                    `absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black/70  transition-all hover:bg-black/10`,
                    current !== index + 1 && 'bg-black/80'
                  )}
                ></div>
                <Image
                  priority
                  src={placeholderImage}
                  alt={'Placeholder for' + index}
                  className=" object-cover"
                />
                <div className="absolute bottom-3 flex  flex-col gap-2 px-3 ">
                  <p className="line-clamp-2 font-semibold text-gray-200 md:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, labore?
                  </p>
                  <p className="text-xs text-gray-400 ">{`CNN • 6mins`}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden flex-col gap-1 self-end sm:flex">
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
        <span className="text-xs italic">{`Slide ${
          api?.selectedScrollSnap() + 1 || '-'
        } of ${count}`}</span>
      </div>
    </Carousel>
  )
}
