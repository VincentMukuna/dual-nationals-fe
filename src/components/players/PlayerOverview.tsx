import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
} from './PlayerStatsSections'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import { IconJersey, IconVerified } from '@/components/icons'
import { Player } from '@/lib/schemas'

export default function PlayerOverview({ player }: { player: Player }) {
  return (
    <PlayerInfoSection
      value="overview"
      className="flex flex-col divide-y divide-gray-800"
      trigger={<PlayerInfoSectionTitle>Overview</PlayerInfoSectionTitle>}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Avatar className={'h-14 w-14 rounded-sm'}>
            <AvatarImage src={player.headshot} alt={`@${player.name}`} className="" />
            <AvatarFallback className="rounded-sm">
              <User />
            </AvatarFallback>
          </Avatar>
          <PlayerInfoItem>
            <span className={' flex items-center font-semibold'}>
              {player.name}
              <IconVerified />
            </span>
            <div className="flex items-center gap-1 ">
              <IconJersey />
              <span>{player['jersey_number'] || 'N/A'}</span>
            </div>
          </PlayerInfoItem>
        </div>
        <div className="flex [&>div]:basis-1/2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={player.club_logo} alt="Club logo" />
              <AvatarFallback />
            </Avatar>
            <PlayerInfoItem>
              <PlayerInfoItemStat>{player.club}</PlayerInfoItemStat>
              <PlayerInfoItemLabel>{player.main_position}</PlayerInfoItemLabel>
            </PlayerInfoItem>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className=" rounded-sm">
              <AvatarImage src={player.league_logo} alt="Club logo" />
              <AvatarFallback className="rounded-md" />
            </Avatar>
            <PlayerInfoItem>
              <PlayerInfoItemStat>{player.league_name}</PlayerInfoItemStat>
              <PlayerInfoItemLabel>{player.league_level}</PlayerInfoItemLabel>
            </PlayerInfoItem>
          </div>
        </div>
      </div>
      <div className="flex gap-12 [&>div]:basis-1/2">
        <PlayerInfoItem>
          <div className="flex items-center gap-1 text-lg font-semibold">
            {`€${player['market_value'] || 'N/A'}`}
          </div>
          <PlayerInfoItemLabel>Market Value</PlayerInfoItemLabel>
        </PlayerInfoItem>
        <PlayerInfoItem>
          <PlayerInfoItemStat>{player.contract_expires}</PlayerInfoItemStat>
          <PlayerInfoItemLabel>Contract Expiration</PlayerInfoItemLabel>
        </PlayerInfoItem>
      </div>
    </PlayerInfoSection>
  )
}
