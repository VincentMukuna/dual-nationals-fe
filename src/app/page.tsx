import NewsHighlights from '@/app/(homepage)/NewsHighlights'
import PlayerSearchBox from '@/app/(homepage)/PlayerSearchBox'
import PlayerSpotlight from '@/app/(homepage)/PlayerSpotlight'

export default function Home() {
  return (
    <main className="flex flex-col  gap-8 pt-2 md:max-w-none">
      <NewsHighlights />
      <PlayerSearchBox />
      <PlayerSpotlight />
    </main>
  )
}
