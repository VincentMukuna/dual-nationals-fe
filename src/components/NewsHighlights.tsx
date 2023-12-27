import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import placeholderImage from '../../public/static/images/manager-unsplash.jpg'
import Image from 'next/image'

export default function NewsHighlights() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="  "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="">
              <div className="relative  flex aspect-[7/3] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black/70  "></div>
                <Image
                  priority
                  src={placeholderImage}
                  alt={'Placeholder for' + index}
                  className=" object-cover"
                />
                <div className="absolute bottom-3 flex  flex-col gap-2 px-3 ">
                  <p className="font-semibold text-gray-200 md:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, labore?
                  </p>
                  <p className="text-xs text-gray-400 ">{`CNN • 6mins`}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
