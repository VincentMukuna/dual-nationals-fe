import SearchFilters from '@/components/search/filters/search-filters'
import SearchInput from '@/components/search/search-input'
import PlayerSearchResultsList from '@/components/search/search-results'
import { Input } from '@/components/ui/input'
import { Suspense } from 'react'

export default function SearchPlayers({
  searchParams,
}: {
  searchParams: { [index: string]: string | number }
}) {
  console.log(searchParams)
  return (
    <div className="mt-4 grid gap-4 ">
      <SearchInput />
      <main className="grid gap-6 divide-gray-800 xl:grid-cols-12 xl:divide-x">
        <aside className="col-span-3 hidden xl:block">
          <SearchFilters />
        </aside>
        <div className="col-span-9 flex flex-col gap-4 xl:pl-6">
          <Suspense fallback={<p>Loading...</p>}>
            <PlayerSearchResultsList searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
