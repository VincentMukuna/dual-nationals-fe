import {
  PlayerCard,
  PlayerCardAge,
  PlayerCardAvatar,
  PlayerCardClubLogo,
  PlayerCardEligibleFlags,
  PlayerCardNTLogo,
  PlayerCardName,
  PlayerCardPriceTag,
} from '@/app/(homepage)/PlayerCard'
import { fetchPlayers } from '@/lib/data'
import { Player } from '@/lib/schemas'
import _ from 'lodash'
import { MoreVertical } from 'lucide-react'
import CustomLink from '../Link'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import SearchFilters from './filters/search-filters'

const SEARCH_RESULTS_PER_PAGE = 10

export default async function PlayerSearchResultsList({
  searchParams,
}: {
  searchParams: { [index: string]: string | number }
}) {
  let queryArray: string[] = []
  _.forOwn(searchParams, (val, searchParam) => queryArray.push(`${searchParam}=${val}`))
  const queryStr = queryArray.concat(`_limit=${SEARCH_RESULTS_PER_PAGE}`).join('&')

  const players: Player[] = await fetchPlayers(queryStr)
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-between">
        <div className="text-lg font-semibold">{players.length} player&#10088;s&#10089; found</div>
        <Dialog>
          <DialogTrigger>Filters</DialogTrigger>
          <DialogContent className=" max-h-[70vh] max-w-[min(98vw,24rem)] overflow-y-auto  pt-12">
            <SearchFilters />
          </DialogContent>
        </Dialog>
      </div>
      {players.length < 1 && <p className="text-center">No such player</p>}
      {players.map((player) => (
        <PlayerCard
          player={player}
          key={player.id}
          className="  relative  max-w-[93vw] overflow-hidden border-none p-2 transition-transform hover:scale-[.994]"
        >
          <CustomLink
            href={`/players/${player.id}`}
            className="absolute inset-0 transition hover:bg-gray-500/10"
          />
          <div className="grid w-full grid-cols-12 items-center justify-between gap-8">
            <div className="col-span-10 flex items-center gap-2 text-sm md:col-span-4">
              <PlayerCardAvatar className="h-12 w-12" />
              <div className="flex flex-col gap-1">
                <PlayerCardName className="text-md line-clamp-2 flex gap-1" />
              </div>
            </div>

            <div className="col-span-2 hidden items-center  gap-2 sm:flex ">
              <PlayerCardClubLogo className="h-6 w-6" />
              <span className="text-gray-600">{` • `}</span>
              <PlayerCardNTLogo className="h-6 w-6" />

              <PlayerCardEligibleFlags className="h-6 w-6 " />
            </div>
            <div className="col-span-6 hidden items-center gap-6 lg:flex">
              <span className="text-gray-600">{` • `}</span>
              <span className="text-sm text-gray-500">{player.main_position}</span>
              <span className="text-gray-600">{` • `}</span>
              <PlayerCardAge className="flex gap-1 text-sm" />
              <span className="text-gray-600">{` • `}</span>
              <PlayerCardPriceTag className="text-sm" />
            </div>

            <div className="absolute right-0 top-2.5 z-10 text-gray-400">
              <MoreVertical className="h-5 w-5" />
            </div>
          </div>
        </PlayerCard>
      ))}
    </div>
  )
}
