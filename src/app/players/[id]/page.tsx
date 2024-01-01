import { IconJersey, IconVerified } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fetchPlayer } from '@/lib/data'
import { Player, PlayerSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'
import _ from 'lodash'
import { Tag, User } from 'lucide-react'

import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import PlayerOverview from './PlayerOverview'
import { z } from 'zod'
import PlayerInfo from './PlayerInfo'
import Nationality from './Nationality'
import CurrentSeasonStats from './CurrentSeasonStats'
import ClubHistory from './ClubHistory'
import NatTeamHistory from './NatTeamHistory'
import { Accordion } from '@/components/ui/accordion'

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
