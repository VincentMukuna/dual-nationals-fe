'use client'
import { ReactNode } from 'react'
import { useQueryClient, QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()
export default function Providers({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
