import NewsHighlights from '@/app/(homepage)/NewsHighlights'
import PlayerSearchBox from '@/app/(homepage)/PlayerSearchBox'
import PlayerSpotlight, { PlayerSpotlightSkeleton } from '@/app/(homepage)/PlayerSpotlight'
import { Suspense } from 'react'
import MostViewedPlayers, { MostViewedPlayersSkeleton } from './(homepage)/MostViewedPlayers'
import NewsFeed from './(homepage)/NewsFeed'

export default function Home() {
  return (
    <div className="flex flex-col  gap-8 pt-2 md:max-w-none">
      <NewsHighlights />
      <PlayerSearchBox />
      <Suspense fallback={<PlayerSpotlightSkeleton />}>
        <PlayerSpotlight />
      </Suspense>
      <Suspense fallback={<MostViewedPlayersSkeleton />}>
        <MostViewedPlayers />
      </Suspense>

      <NewsFeed />
    </div>
  )
}
