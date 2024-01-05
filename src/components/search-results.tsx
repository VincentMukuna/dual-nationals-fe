import {
  PlayerCard,
  PlayerCardAge,
  PlayerCardAvatar,
  PlayerCardClubLogo,
  PlayerCardEligibleFlags,
  PlayerCardNTLogo,
  PlayerCardName,
  PlayerCardPosition,
  PlayerCardPriceTag,
} from '@/app/(homepage)/PlayerCard'
import { fetchPlayers } from '@/lib/data'
import { Player } from '@/lib/schemas'
import { MoreVertical } from 'lucide-react'
import CustomLink from './Link'

export default async function PlayerSearchResultsList({ query }: { query: string }) {
  const players: Player[] = await fetchPlayers(`name_like=${query || ''}&_limit=10`)
  return (
    <div className="flex flex-col gap-3">
      {players.length < 1 && <p className="text-center">No such player</p>}
      {players.map((player) => (
        <PlayerCard
          player={player}
          key={player.id}
          className="  relative w-full border-none p-2 transition-transform hover:scale-[.99]"
        >
          <CustomLink
            href={`/players/${player.id}`}
            className="absolute inset-0 hover:bg-gray-500/30"
          />
          <div className="grid w-full grid-cols-12 items-center justify-between gap-8">
            <div className="col-span-6 flex items-center gap-2 text-sm md:col-span-4">
              <PlayerCardAvatar className="h-12 w-12" />
              <div className="flex flex-col gap-1">
                <PlayerCardName className="text-md line-clamp-2" />
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <PlayerCardClubLogo className="h-6 w-6" />
              <span className="text-gray-600">{` • `}</span>
              <PlayerCardNTLogo className="h-6 w-6" />

              <PlayerCardEligibleFlags className="h-6 w-6" />
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
