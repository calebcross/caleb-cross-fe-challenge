'use client'
import { useState } from 'react'
import { SearchIcon } from '../Icons/SearchIcon'
import styles from './SearchInput.module.css'
import { parseAsString, useQueryState } from 'nuqs'
type SearchProps = {
  placeholder: string
}
export type SearchParams = {
  search: string
}
const searchInput = ({ placeholder }: SearchProps) => {
  const [query, setQuery] = useQueryState(
    'query',
    parseAsString.withDefault('').withOptions({ shallow: false })
  )
  const [inputState, setInputState] = useState('')

  return (
    <div className={styles.root}>
      <form
        className={styles.form}
        onSubmit={() => setQuery(inputState || null)}
      >
        <input
          id="searchInput"
          className={styles.searchInput}
          placeholder={placeholder}
          name="query"
          type="search"
          defaultValue={query}
          onChange={(e) => setInputState(e.target.value)}
        ></input>
      </form>
    </div>
  )
}

export default searchInput
