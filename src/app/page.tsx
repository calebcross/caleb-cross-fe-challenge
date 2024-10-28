import ThreeByOneGrid from '@/components/ThreeByOneGrid'
import styles from './Home.module.css'
import { AppContext } from 'next/app'
import Results from '@/components/Results'
import { searchQuery } from '@/client/search'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { page = '1', sort = 'asc', query = '' } = await searchParams
    
    const results = await searchQuery(query)

  return (
    <div>
      <div className={styles.root}>
        {query ? <Results results={results} /> : <ThreeByOneGrid />}
      </div>
    </div>
  )
}
