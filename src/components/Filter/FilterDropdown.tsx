'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from '../Icons/SearchIcon'
import styles from './FilterDropdown.module.css'
import { useState } from 'react'
import { PlusIcon } from '../Icons/PlusIcon'
import { MinusIcon } from '../Icons/MinusIcon'
export type FilterProps = {
  label: string
  facet: any
}

export enum FacetType {
  categories = 'Categories',
  brands = 'Brands',
  merchants = 'Merchants',
}
const FilterDropdown = ({ label, facet }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const facetKey = label as keyof typeof FacetType
  const searchParams = useSearchParams() ?? ''
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const facetOptions = Object.keys(facet).map((key) => {
    const setFilter = () => {
      const value = facet[key].name
      if (value) {
        params.set(facetKey, value)
      } else {
        params.delete(facetKey)
      }

      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      })
    }
    return (
      <li key={facet[key].name} className={`ais-RefinementList-item`}>
        <label className="ais-RefinementList-label">
          <input
            className="ais-RefinementList-checkbox"
            type="checkbox"
            value={facet[key].name}
            //checked={item.isRefined}
            onChange={setFilter}
          />
          <span className="ais-RefinementList-labelText">
            {facet[key].name}
          </span>
        </label>
      </li>
    )
  })
  return (
    <div>
      <div className={styles.buttonContainer}>
        <button onClick={toggleIsOpen} className={styles.button} type="button">
          {FacetType[facetKey]}
          <div className={styles.iconContainer}>
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </div>
        </button>
        <div
          className={`${styles.dropDownContainer} ${isOpen ? styles.open : styles.closed}`}
        >
          <ul className={styles.list}>{facetOptions}</ul>
        </div>
      </div>
    </div>
  )
}
export default FilterDropdown
