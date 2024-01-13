import { Accordion } from '@/components/ui/accordion'
import { fetchPlayer } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import ClubHistory from './club-history'
import CurrentSeasonStats from './current-season-stats'
import Nationality from './nationality'
import PlayerInfo from './player-info'
import NatTeamHistory from './player-nat-team-history'
import PlayerOverview from './player-overview'

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
