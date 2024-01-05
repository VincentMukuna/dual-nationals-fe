import ClubHistory from '@/components/players/ClubHistory'
import CurrentSeasonStats from '@/components/players/CurrentSeasonStats'
import NatTeamHistory from '@/components/players/NatTeamHistory'
import Nationality from '@/components/players/Nationality'
import PlayerInfo from '@/components/players/PlayerInfo'
import PlayerOverview from '@/components/players/PlayerOverview'
import { Accordion } from '@/components/ui/accordion'
import { fetchPlayer } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import _ from 'lodash'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Player Statistics',
  description: 'Detailed player statistics for both club and national teams',
}

export default async function PlayerPage({ params }: { params: { id: string } }) {
  const res = await fetchPlayer(params.id).then((resArray) => resArray[0])
  const parsed = PlayerSchema.safeParse(res)
  let player: Player
  if (parsed.success) {
    player = parsed.data
  } else {
    throw new Error('Invalid schema')
  }

  return (
    <>
      <Accordion
        type="multiple"
        defaultValue={[
          'overview',
          'player-info',
          'nationality',
          'current-season-stats',
          'club-history',
          'nat-team-history',
        ]}
        className="mx-auto flex max-w-xl flex-col gap-4 px-2"
      >
        <PlayerOverview player={player} />
        <PlayerInfo player={player} />
        <Nationality player={player} />
        <CurrentSeasonStats player={player} />
        <ClubHistory player={player} />
        <NatTeamHistory player={player} />
      </Accordion>
    </>
  )
}
