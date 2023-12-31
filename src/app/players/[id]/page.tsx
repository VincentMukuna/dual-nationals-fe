import { IconJersey, IconVerified } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fetchPlayer } from '@/lib/data'
import { PlayerSchema } from '@/lib/schemas'
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
  const player = await fetchPlayer(params.id).then((resArray) => resArray[0])
  // const parsed = PlayerSchema.safeParse(player)

  // if (!parsed.success) {
  //   console.log(parsed.error)
  // } else {
  //   console.log('Data: ')
  // }

  if (!player) {
    notFound()
  }

  return (
    <Accordion type="multiple" className="mx-auto flex max-w-xl flex-col gap-4 px-2">
      <PlayerOverview player={player} />
      <PlayerInfo player={player} />
      <Nationality player={player} />
      <CurrentSeasonStats player={player} />
      <ClubHistory player={player} />
      <NatTeamHistory player={player} />
    </Accordion>
  )
}
