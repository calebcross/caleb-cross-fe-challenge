'use client'

import { parseAsString, useQueryState } from 'nuqs'
import styles from './SortButton.module.css'
import { sortByEnum, sortLabelEnum } from '@/types/apiTypes'

const sortButton = () => {
  const [sort, setSort] = useQueryState(
    'sort',
    parseAsString
      .withDefault(sortByEnum.RELEVANCE)
      .withOptions({ shallow: false })
  )

  const items = [
    {
      value: sortByEnum.RELEVANCE,
      label: sortLabelEnum.relevance,
    },
    {
      value: sortByEnum.NEWEST,
      label: sortLabelEnum.newest,
    },
    {
      value: sortByEnum.ASC,
      label: sortLabelEnum.lowPrice,
    },
    {
      value: sortByEnum.DESC,
      label: sortLabelEnum.highPrice,
    },
  ]
  return (
    <div className={styles.root}>
      <select
        id="sortBy"
        className={styles.sortbutton}
        onChange={(e) => setSort(e.target.value)}
        defaultValue={sort}
      >
        {items.map((item: { value: string; label: string }, index: number) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default sortButton
