'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from '../Icons/SearchIcon'
import styles from './SearchInput.module.css'
type SearchProps = {
  placeholder: string
}
export type SearchParams = {
  search: string
}
const searchInput = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams() ?? ''
  const pathname = usePathname()
  const { replace } = useRouter()
  const search = async (formData: any) => {
    const results = await fetch(`/api/search`, {
      method: 'POST',
      body: JSON.stringify({ query: formData.get('query') }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await results.json()
    console.log(data)

    const value = formData.get('query')
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }
  return (
    <form className={styles.root} action={search} id="searchform">
      <SearchIcon className={styles.searchIcon} />
      <input
        id="searchInput"
        className={styles.searchInput}
        placeholder={placeholder}
        name="query"
        type="search"
      ></input>
      <button type="submit" onSubmit={search}>
        Search
      </button>
    </form>
  )
}

export default searchInput
