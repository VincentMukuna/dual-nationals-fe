import { unstable_noStore as noStore } from 'next/cache'
import { PlayerSchema } from './schemas'
import { z } from 'zod'

const PlayersArraySchema = z.array(PlayerSchema)

export async function fetchPlayers(query: string = '') {
  noStore()
  const url = process.env['NEXT_PUBLIC_BACKEND_URL']
  const res = await fetch(`${url}/players?${query}`)
  return await res.json()
}

export async function fetchPlayer(id: string) {
  const url = process.env['NEXT_PUBLIC_BACKEND_URL']
  const res = await fetch(`${url}/players?id=${id}`)
  return await res.json()
}
