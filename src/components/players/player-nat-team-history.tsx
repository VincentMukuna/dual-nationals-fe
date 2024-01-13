import { IconBall, IconFormationFilled } from '@/components/icons'
import { Player } from '@/lib/schemas'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoItemStatGroup,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
  PlayerInfoSubSectionTitle,
} from './player-stats-sections'

export default function NatTeamHistory({ player }: { player: Player }) {
  return (
    <PlayerInfoSection
      value="nat-team-history"
      trigger={<PlayerInfoSectionTitle>National Team History</PlayerInfoSectionTitle>}
    >
      {player.national_team_stats.national_team.map((national_team: string, i: number) => {
        return (
          <div key={i} className="flex flex-col gap-2 ">
            <PlayerInfoSubSectionTitle className="it flex">
              <Avatar className="h-10 w-10">
                <AvatarImage src={player.national_team_stats.teams_flag[i]} />
                <AvatarFallback className="h-10 w-10 rounded-md" />
              </Avatar>
              <div className="flex flex-col ">
                <div>{national_team}</div>
                <div className="text-xs font-medium text-gray-500">
                  Debut: {player.national_team_stats.debut[i]}
                </div>
              </div>
            </PlayerInfoSubSectionTitle>
            <PlayerInfoItemStatGroup className="grid grid-cols-2 lg:grid-cols-4">
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconFormationFilled />
                  {player.national_team_stats.appearances[i]}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Apps</PlayerInfoItemLabel>
              </PlayerInfoItem>
              <PlayerInfoItem>
                <PlayerInfoItemStat>
                  <IconBall /> {player.national_team_stats.goals[i]}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Goals</PlayerInfoItemLabel>
              </PlayerInfoItem>
              <PlayerInfoItem className="col-span-2 ">
                <PlayerInfoItemStat>
                  {player.national_team_stats.age_at_debut[i]}
                </PlayerInfoItemStat>
                <PlayerInfoItemLabel>Age at debut</PlayerInfoItemLabel>
              </PlayerInfoItem>
            </PlayerInfoItemStatGroup>
          </div>
        )
      })}
    </PlayerInfoSection>
  )
}
