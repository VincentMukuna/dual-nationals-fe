'use client'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Flag, Heart, Share2, Shirt, Tag, User } from 'lucide-react'
import { getPosInitials } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { IconBall, IconBoot, IconFormationFilled } from './icons'
import { useContext, createContext } from 'react'

const PlayerContext = createContext<any>({})

export default function PlayerCard({ player, variant }: { player: any; variant?: 'summary' }) {
  return (
    <PlayerContext.Provider value={player}>
      <Card className="ml-2">
        <CardContent
          className="flex flex-col gap-2 divide-y divide-gray-900 p-0 px-2 py-3
      text-sm text-gray-300
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-blue-700 "
                  d="m10.95 13.43l-1.796-1.79q-.14-.14-.341-.15q-.201-.01-.367.156q-.16.16-.16.354t.16.354l1.939 1.938q.242.243.565.243q.323 0 .565-.243l4.039-4.038q.146-.146.153-.344q.006-.198-.153-.364q-.166-.165-.357-.168q-.191-.003-.357.162zm-2.28 7.185l-1.316-2.2l-2.48-.523q-.299-.055-.476-.32t-.146-.562l.236-2.556l-1.682-1.92q-.212-.217-.212-.534q0-.317.212-.535l1.682-1.919l-.236-2.556q-.03-.298.146-.562t.475-.32l2.48-.523l1.316-2.2q.162-.268.435-.37q.273-.103.565.027L12 4.027l2.33-.985q.293-.13.566-.028q.273.103.435.37l1.315 2.2l2.48.524q.299.055.476.32t.146.562l-.236 2.556l1.682 1.92q.212.217.212.534q0 .317-.212.535l-1.682 1.919l.236 2.556q.03.298-.146.562t-.475.32l-2.48.523l-1.316 2.2q-.162.268-.435.37q-.273.103-.565-.027L12 19.973l-2.33.985q-.293.13-.566.028q-.273-.103-.435-.37"
                />
              </svg>
            </span>
            <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs">
              <div className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#42ade2"
                    d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5"
                  />
                  <path
                    fill="#22648c"
                    d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7zm38 .1c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7z"
                  />
                </svg>{' '}
                <span>{player['jersey_number']}</span>
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
                {`€${player['market_value']}`}
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
