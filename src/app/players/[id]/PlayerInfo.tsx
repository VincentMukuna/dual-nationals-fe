import React from 'react'
import {
  PlayerInfoItemLabel,
  PlayerInfoItemStat,
  PlayerInfoSection,
  PlayerInfoSectionTitle,
} from './components'

export default function PlayerInfo({ player }: { player: any }) {
  return (
    <PlayerInfoSection
      value="player-info"
      trigger={<PlayerInfoSectionTitle>Player Info</PlayerInfoSectionTitle>}
    >
      <div className="flex max-w-sm justify-between">
        <div className=" flex flex-col">
          <PlayerInfoItemLabel>Birth</PlayerInfoItemLabel>
          <PlayerInfoItemStat>{player.date_of_birth}</PlayerInfoItemStat>
        </div>
        <div>
          <PlayerInfoItemLabel>Age </PlayerInfoItemLabel>
          <PlayerInfoItemStat>{player.age}</PlayerInfoItemStat>
        </div>
        <div>
          <PlayerInfoItemLabel>Height </PlayerInfoItemLabel>
          <PlayerInfoItemStat>{player.height}</PlayerInfoItemStat>
        </div>
      </div>

      <div>
        <PlayerInfoItemLabel>Place of Birth</PlayerInfoItemLabel>
        <PlayerInfoItemStat>{player.place_of_birth}</PlayerInfoItemStat>
      </div>
      <div>
        <PlayerInfoItemLabel>Position</PlayerInfoItemLabel>
        <div className="flex gap-1">
          <PlayerInfoItemStat>{player.main_position}, </PlayerInfoItemStat>
          <PlayerInfoItemStat>{player.other_postions?.join(', ')}</PlayerInfoItemStat>
        </div>
      </div>
    </PlayerInfoSection>
  )
}
