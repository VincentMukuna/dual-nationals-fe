import { fetchPlayer } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function PlayerPage({ params }: { params: { id: string } }) {
  const player = await fetchPlayer(params.id).then((resArray) => resArray[0])
  if (!player) {
    notFound()
  }

  return <div>{player.name}</div>
}
