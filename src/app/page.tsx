import ThreeByOneGrid from '@/components/ThreeByOneGrid'
import styles from './Home.module.css'
import { searchQuery } from '@/client/search'
import { sortByEnum } from '@/types/apiTypes'
import Results from '@/components/Results'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const {
    categories = '',
    brands = '',
    query = '',
    sort = sortByEnum.RELEVANCE,
  } = await searchParams
  const results = await searchQuery(query, sort)

  return (
    <div>
      <div className={styles.root}>
        {query ? <Results results={results} /> : <ThreeByOneGrid />}
      </div>
    </div>
  )
}
