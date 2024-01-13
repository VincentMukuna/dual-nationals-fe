import { Player } from '@/lib/schemas'
import _ from 'lodash'
import {
  PlayerInfoItem,
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
} from './player-stats-sections'

export default function Nationality({ player }: { player: Player }) {
  return (
    <PlayerInfoSection
      className="max-w-sm"
      value="nationality"
      trigger={<PlayerInfoSectionTitle>Nationality</PlayerInfoSectionTitle>}
    >
      <div className="flex justify-between pe-8">
        <PlayerInfoItem>
          <PlayerInfoItemLabel>Nationality</PlayerInfoItemLabel>
          <PlayerInfoItemStat>
            {_.isArray(player.citizenship) ? player.citizenship[0] : player.citizenship}
          </PlayerInfoItemStat>
        </PlayerInfoItem>
        <PlayerInfoItem>
          <PlayerInfoItemLabel>Debut</PlayerInfoItemLabel>
          <PlayerInfoItemStat>{player.national_team_stats.debut.at(0)}</PlayerInfoItemStat>
        </PlayerInfoItem>
      </div>
      <PlayerInfoItem>
        <PlayerInfoItemLabel>Apps</PlayerInfoItemLabel>
        <PlayerInfoItemStat>
          {player.national_team_stats.appearances.reduce(
            (total: any, apps: any) => parseInt(total) + apps,
            0
          )}
        </PlayerInfoItemStat>
      </PlayerInfoItem>
      <div className="flex justify-between pe-8">
        <PlayerInfoItem>
          <PlayerInfoItemLabel>Goals</PlayerInfoItemLabel>
          <PlayerInfoItemStat>
            {player.national_team_stats.goals.reduce(
              (total: any, goals: any) => parseInt(total) + goals,
              0
            )}
          </PlayerInfoItemStat>
        </PlayerInfoItem>
        <PlayerInfoItem>
          <PlayerInfoItemLabel>Other Nationalities</PlayerInfoItemLabel>-
        </PlayerInfoItem>
      </div>
    </PlayerInfoSection>
  )
}
