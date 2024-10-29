import ThreeByOneGrid from '@/components/ThreeByOneGrid'
import styles from './Home.module.css'
import { searchQuery } from '@/client/search'
import SearchPage from './search/page'
import { sortByEnum } from '@/types/apiTypes'

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
        {query ? <SearchPage results={results} /> : <ThreeByOneGrid />}
      </div>
    </div>
  )
}
