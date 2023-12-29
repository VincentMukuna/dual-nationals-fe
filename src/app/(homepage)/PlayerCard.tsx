'use client'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { Heart, Share2, Tag, User } from 'lucide-react'
import { cn, getPosInitials } from '@/lib/utils'
import { Card, CardContent } from '../../components/ui/card'
import {
  IconBall,
  IconBoot,
  IconFormationFilled,
  IconJersey,
  IconVerified,
} from '../../components/icons'
import { useContext, createContext, ReactNode } from 'react'
import CustomLink from '@/components/Link'

const PlayerCardContext = createContext<any>({})

export function PlayerCard({
  player,
  children,
  className,
}: {
  player: any
  children: ReactNode
  className?: string
}) {
  return (
    <PlayerCardContext.Provider value={player}>
      <Card>
        <CardContent className={className}>{children}</CardContent>
      </Card>
    </PlayerCardContext.Provider>
  )
}

export default function PlayerCardDefault({
  player,
  variant,
}: {
  player: any
  variant?: 'summary'
}) {
  return (
    <CustomLink href={`/players/${player.id}`}>
      <PlayerCardContext.Provider value={player}>
        <Card className="ml-2">
          <CardContent
            className="flex flex-col gap-4 divide-y divide-gray-800 p-0 px-3 pb-2 text-sm text-gray-300
          [&>div]:pt-2
      "
          >
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <PlayerCardAvatar />
                <div className="flex space-x-2">
                  <Share2 />
                  <Heart />
                </div>
              </div>
              <PlayerCardName />
              <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs">
                <PlayerCardJerseyNo />
                <span>{` • `}</span>
                <PlayerCardPosition />
                <span>{` • `}</span>
                <PlayerCardAge />
                <span>{` • `}</span>
                <PlayerCardPriceTag />
              </div>
            </div>
            <PlayerCardClubStats />
            <PlayerCardNTStats />
          </CardContent>
        </Card>
      </PlayerCardContext.Provider>
    </CustomLink>
  )
}

export function PlayerCardName({ className }: { className?: string }) {
  const player = useContext(PlayerCardContext)
  return (
    <span className={cn(' flex items-center font-semibold', className)}>
      {player.name}
      <IconVerified />
    </span>
  )
}

export function PlayerCardAvatar({ className }: { className?: string }) {
  const player = useContext(PlayerCardContext)
  return (
    <Avatar className={cn('h-14 w-14 rounded-sm', className)}>
      <AvatarImage src={player.headshot} alt={`@${player.name}`} className="" />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  )
}
export function PlayerCardAge() {
  const player = useContext(PlayerCardContext)
  return (
    <span>
      <span className="text-gray-400">Age</span> {`${player['age']}`}
    </span>
  )
}
export function PlayerCardJerseyNo() {
  const player = useContext(PlayerCardContext)
  return (
    <div className="flex items-center gap-1 ">
      <IconJersey />
      <span>{player['jersey_number'] || 'N/A'}</span>
    </div>
  )
}

export function PlayerCardPosition() {
  const player = useContext(PlayerCardContext)
  return <span>{getPosInitials(player['main_position'])}</span>
}
export function PlayerCardPriceTag() {
  const player = useContext(PlayerCardContext)
  return (
    <div className="flex gap-1">
      <Tag className="h-4 w-4" />
      {`€${player['market_value'] || 'N/A'}`}
    </div>
  )
}

export function PlayerCardClubLogo({ className }: { className?: string }) {
  const player = useContext(PlayerCardContext)
  return (
    <Avatar className={className}>
      <AvatarImage src={player.club_logo} alt="Club logo" />
      <AvatarFallback />
    </Avatar>
  )
}

export function PlayerCardClubStats() {
  const player = useContext(PlayerCardContext)

  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="flex gap-2">
        <PlayerCardClubLogo />
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

export function PlayerCardNTLogo({ className }: { className?: string }) {
  const player = useContext(PlayerCardContext)
  return (
    <Avatar className={className}>
      <AvatarImage src={player.national_team_flag} />
      <AvatarFallback />
    </Avatar>
  )
}
export function PlayerCardNTStats() {
  const player = useContext(PlayerCardContext)

  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="flex gap-2">
        <PlayerCardNTLogo />

        <div className="flex flex-col  ">
          <div className="font-semibold tracking-wide ">{player.national_team}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div>Also eligible for</div>
            <div className="flex gap-1">
              <PlayerCardEligibleFlags />
            </div>
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

export function PlayerCardEligibleFlags() {
  const player = useContext(PlayerCardContext)

  if (typeof player.citizenship_flag === 'string') {
    if (player.citizenship_flag === player.national_team_flag) {
      return null
    }
    return (
      <Avatar className="h-6 w-6">
        <AvatarImage src={player.citizenship_flag} alt="players national team flag" />
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
