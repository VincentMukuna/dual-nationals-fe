import SearchInput from '@/components/search-input'
import PlayerSearchResultsList from '@/components/search-results'
import { Input } from '@/components/ui/input'
import { Suspense } from 'react'

export default function SearchPlayers({ searchParams }: { searchParams: { search: string } }) {
  return (
    <main>
      <div className="mt-8 flex flex-col gap-4">
        <SearchInput />
        <Suspense fallback={<p>Loading...</p>}>
          <PlayerSearchResultsList query={searchParams.search} />
        </Suspense>
      </div>
    </main>
  )
}
