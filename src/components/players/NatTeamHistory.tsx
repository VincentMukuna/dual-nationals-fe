import { IconBall, IconFormationFilled } from '@/components/icons'
import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoItemStatGroup,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
  PlayerInfoSubSectionTitle,
} from './PlayerStatsSections'
import { Player } from '@/lib/schemas'

export default function NatTeamHistory({ player }: { player: Player }) {
  return (
    <PlayerInfoSection
      value="nat-team-history"
      trigger={<PlayerInfoSectionTitle>National Team History</PlayerInfoSectionTitle>}
    >
      {player.national_team_stats.national_team.map((national_team: string, i: number) => {
        return (
          <div key={i} className="flex flex-col ">
            <PlayerInfoSubSectionTitle>{national_team}</PlayerInfoSubSectionTitle>
            <PlayerInfoItemStatGroup className="grid grid-cols-2">
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
              <PlayerInfoItem className="col-span-2">
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
