import SearchDialog from '@/components/players/search-dialog'
import SearchResults from '@/components/players/search-dialog-results'
import { Suspense } from 'react'
import { cookies, headers } from 'next/headers'

export default function SearchPage({ searchParams }: { searchParams: { search: string } }) {
  return (
    <SearchDialog>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchResults query={searchParams.search} />
      </Suspense>
    </SearchDialog>
  )
}
