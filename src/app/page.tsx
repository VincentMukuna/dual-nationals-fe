import NewsHighlights from '@/components/NewsHighlights'
import PlayerSearchBox from '@/components/PlayerSearchBox'
import PlayerSpotlight from '@/components/PlayerSpotlight'

export default function Home() {
  return (
    <main className="flex flex-col  gap-4 pt-2 md:max-w-none">
      <NewsHighlights />
      <PlayerSearchBox />
      <PlayerSpotlight />
    </main>
  )
}
