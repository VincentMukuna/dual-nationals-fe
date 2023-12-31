import React from 'react'
import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoItemStatGroup,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
  PlayerInfoSubSectionTitle,
} from './components'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  IconBall,
  IconBoot,
  IconFormationFilled,
  IconRedCard,
  IconStopWatch,
  IconYellowCard,
} from '@/components/icons'

export default function ClubHistory({ player }: { player: any }) {
  return (
    <PlayerInfoSection
      value="club-history"
      trigger={<PlayerInfoSectionTitle>Club History</PlayerInfoSectionTitle>}
    >
      <div className="flex flex-col gap-8">
        {player.club_stats.clubs.map((club: string, i: number) => {
          return (
            <div key={i} className="flex flex-col gap-3">
              <PlayerInfoSubSectionTitle>
                <Avatar className="h-12 w-12 rounded-md">
                  <AvatarImage src={player.competion_logo} />
                  <AvatarFallback className="h-14 w-14 rounded-md" />
                </Avatar>{' '}
                {club}
              </PlayerInfoSubSectionTitle>
              <PlayerInfoItemStatGroup>
                <PlayerInfoItem>
                  <PlayerInfoItemStat>
                    <IconFormationFilled /> {player.club_stats.appearances[i]}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Apps</PlayerInfoItemLabel>
                </PlayerInfoItem>
                <PlayerInfoItem>
                  {' '}
                  <PlayerInfoItemStat>
                    <IconBall />
                    {player.club_stats.goals[i]}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Goals:</PlayerInfoItemLabel>
                </PlayerInfoItem>
                <PlayerInfoItem>
                  <PlayerInfoItemStat>
                    <IconBoot />
                    {player.club_stats?.assists?.at(i) || 'N/A'}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Assists</PlayerInfoItemLabel>
                </PlayerInfoItem>
                <PlayerInfoItem>
                  <PlayerInfoItemStat>
                    <IconStopWatch /> {player.club_stats.mins[i]}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Mins Played</PlayerInfoItemLabel>
                </PlayerInfoItem>
                <PlayerInfoItem>
                  <PlayerInfoItemStat>
                    <IconYellowCard />
                    {player.current_seasons_stats.yellow_cards[i]}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Yellow Card</PlayerInfoItemLabel>
                </PlayerInfoItem>
                <PlayerInfoItem>
                  <PlayerInfoItemStat>
                    <IconRedCard />
                    {player.current_seasons_stats.red_cards[i]}
                  </PlayerInfoItemStat>
                  <PlayerInfoItemLabel>Red Card</PlayerInfoItemLabel>
                </PlayerInfoItem>
              </PlayerInfoItemStatGroup>
            </div>
          )
        })}
      </div>
    </PlayerInfoSection>
  )
}
