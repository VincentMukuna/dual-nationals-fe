import ClubHistory from '@/components/players/club-history'
import CurrentSeasonStats from '@/components/players/current-season-stats'
import Nationality from '@/components/players/nationality'
import PlayerInfo from '@/components/players/player-info'
import NatTeamHistory from '@/components/players/player-nat-team-history'
import PlayerOverview from '@/components/players/player-overview'
import { Accordion } from '@/components/ui/accordion'
import { fetchPlayer } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Player Statistics',
  description: 'Detailed player statistics for both club and national teams',
}

export default async function PlayerPage({ params }: { params: { id: string } }) {
  if (!params.id) return null
  const res = await fetchPlayer(params.id).then((resArray) => resArray[0])
  const parsed = PlayerSchema.safeParse(res)
  let player: Player
  if (parsed.success) {
    player = parsed.data
  } else {
    console.log('error', parsed.error)
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
