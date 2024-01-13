import {
  IconBall,
  IconBoot,
  IconFormationFilled,
  IconRedCard,
  IconStopWatch,
  IconYellowCard,
} from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Player } from '@/lib/schemas'
import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoItemStatGroup,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
  PlayerInfoSubSectionTitle,
} from './player-stats-sections'

export default function CurrentSeasonStats({ player }: { player: Player }) {
  return (
    <PlayerInfoSection
      value="current-season-stats"
      trigger={
        <PlayerInfoSectionTitle className="flex items-center gap-2">
          <Avatar className="h-12 w-12 ">
            <AvatarImage src={player.club_logo} />
            <AvatarFallback className="h-12 w-12 rounded-md" />
          </Avatar>
          Current Season Stats
        </PlayerInfoSectionTitle>
      }
    >
      {player.current_seasons_stats.competions.map((competition, i) => {
        return (
          <div key={i} className="flex flex-col gap-2">
            <PlayerInfoSubSectionTitle className="flex items-center gap-2">
              <Avatar className="h-12 w-12 rounded-md">
                <AvatarImage src={player.current_seasons_stats.competion_logo[i]} />
                <AvatarFallback className="h-14 w-14 rounded-md" />
              </Avatar>
              <div>
                <div>{competition}</div>
                <div className="text-sm font-light">2023/24</div>
              </div>
            </PlayerInfoSubSectionTitle>
            <PlayerInfoItemStatGroup>
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconFormationFilled />
                  {player.current_seasons_stats.appearances[i]}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Apps</PlayerInfoItemLabel>
              </PlayerInfoItem>
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconBall />
                  {player.current_seasons_stats.goals[i]}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Goals </PlayerInfoItemLabel>
              </PlayerInfoItem>
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconBoot />
                  {player.current_seasons_stats?.assists?.at(i) || 'N/A'}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Assists</PlayerInfoItemLabel>
              </PlayerInfoItem>
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconStopWatch />
                  {player.current_seasons_stats.mins[i]}
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
    </PlayerInfoSection>
  )
}
