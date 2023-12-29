'use client'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { Heart, Share2, Tag, User } from 'lucide-react'
import { getPosInitials } from '@/lib/utils'
import { Card, CardContent } from '../../components/ui/card'
import {
  IconBall,
  IconBoot,
  IconFormationFilled,
  IconJersey,
  IconVerified,
} from '../../components/icons'
import { useContext, createContext } from 'react'

const PlayerContext = createContext<any>({})

export default function PlayerCard({ player, variant }: { player: any; variant?: 'summary' }) {
  return (
    <PlayerContext.Provider value={player}>
      <Card className="ml-2">
        <CardContent
          className="flex flex-col gap-4 divide-y divide-gray-800 p-0 px-3 pb-2 text-sm text-gray-300
          [&>div]:pt-2
      "
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <Avatar className="h-14 w-14 rounded-sm">
                <AvatarImage src={player.headshot} alt={`@${player.name}`} className="" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="flex space-x-2">
                <Share2 />
                <Heart />
              </div>
            </div>

            <span className=" flex items-center font-semibold">
              {player.name}
              <IconVerified />
            </span>
            <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs">
              <div className="flex items-center gap-1 ">
                <IconJersey />
                <span>{player['jersey_number'] || 'N/A'}</span>
              </div>
              <span>{` • `}</span>
              <span>{getPosInitials(player['main_position'])}</span>
              <span>{` • `}</span>
              <span>
                {' '}
                <span className="text-gray-400">Age</span> {`${player['age']}`}
              </span>
              <span>{` • `}</span>
              <div className="flex gap-1">
                <Tag className="h-4 w-4" />
                {`€${player['market_value'] || 'N/A'}`}
              </div>
            </div>
          </div>
          <PlayerClubStats />
          <PlayerNTStats />
        </CardContent>
      </Card>
    </PlayerContext.Provider>
  )
}

function PlayerClubStats() {
  const player = useContext(PlayerContext)

  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={player.club_logo} />
          <AvatarFallback />
        </Avatar>

        <div className="space-y-[0.1rem]">
          <div className="text-xs text-gray-500">Current season at</div>
          <div className="font-semibold tracking-wide ">{player.club}</div>
        </div>
      </div>
      <div className="flex gap-2 text-gray-400">
        <span className="flex items-center gap-1 text-xs">
          <IconFormationFilled />
          {player.current_seasons_stats.appearances[0] + ' Apps' || 'N/A'}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <IconBall />
          {player.current_seasons_stats.goals[0] || 'N/A'}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <IconBoot />
          {player.current_seasons_stats?.assists?.at(0) || 'N/A'}
        </span>
      </div>
    </div>
  )
}
function PlayerNTStats() {
  const player = useContext(PlayerContext)

  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={player.national_team_flag} />
          <AvatarFallback />
        </Avatar>

        <div className="flex flex-col  ">
          <div className="font-semibold tracking-wide ">{player.national_team}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div>Also eligible for</div>
            <div className="flex gap-1">{getEligibleFlags(player) || '-'}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-gray-400">
        <span className="flex items-center gap-1 text-xs">
          <IconFormationFilled />
          {player.national_team_stats.appearances[0] + ' Apps' || 'N/A'}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <IconBall />
          {player.national_team_stats.goals[0] || 'N/A'}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <IconBoot />
          {player.national_team_stats?.assists?.at(0) || 'N/A'}
        </span>
      </div>
    </div>
  )
}

function getEligibleFlags(player: any) {
  if (typeof player.citizenship_flag === 'string') {
    if (player.citizenship_flag === player.national_team_flag) {
      return
    }
    return (
      <Avatar className="h-6 w-6">
        <AvatarImage src={player.citizenship_flag} />
        <AvatarFallback />
      </Avatar>
    )
  }

  return player.citizenship_flag
    .filter((flag: any) => flag != player.national_team_flag)
    .map((flag: any) => (
      <Avatar key={flag} className="h-6 w-6">
        <AvatarImage src={flag} />
        <AvatarFallback />
      </Avatar>
    ))
}
