'use client'
import styles from './FilterDropdown.module.css'
import { useContext, useState } from 'react'
import { PlusIcon } from '../Icons/PlusIcon'
import { MinusIcon } from '../Icons/MinusIcon'
import { useQueryState, parseAsString, parseAsArrayOf } from 'nuqs'
import { ResultContext } from '@/context/ResultContext'
import { IBrand, IFacet, IProduct, ISeller } from '@/types/apiTypes'
export type FilterProps = {
  label: string
  facet: IFacet[]
}

export enum FacetType {
  categories = 'Categories',
  brands = 'Brands',
  merchants = 'Merchants',
}
const FilterDropdown = ({ label, facet }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const facetKey = label as keyof typeof FacetType
  const { products, setProducts, merchants } = useContext(ResultContext)
  const [filter, setFilter] = useQueryState(
    facetKey,
    parseAsArrayOf(parseAsString, '%2C').withDefault([])
  )

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const sorted = facet.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  )

  const facetOptions = sorted.map((facet) => {
    const toggleFilter = () => {
      if (filter.includes(facet.name)) {
        //Already in URL
        let updatedParam = filter.filter((string) => string !== facet.name)
        setFilter(updatedParam)
        //removeFilter
      } else {
        //Not in URL
        setFilter((filter) => [...filter, facet.name])
        let filtered = products.filter((product) => {
          if (label === 'categories') {
            let productCats = Object.values(product.categories)
            if (
              productCats.some(
                (category) =>
                  category.name.toUpperCase() === facet.name.toUpperCase()
              )
            )
              return product
          } else if (label === 'brands') {
            if (product.brand.name.toUpperCase() === facet.name.toUpperCase())
              return product
          }
        })
        setProducts([...filtered])
      }
    }
    const value =
      label == 'merchants'
        ? merchants.find((merchant) => merchant.merchantId === facet.name)
            ?.shopName
        : facet.name
    return (
      <li className={styles.item} key={facet.name}>
        <label className={styles.label}>
          <input
            className={styles.checkbox}
            type="checkbox"
            value={facet.name}
            checked={filter.includes(facet.name)}
            onChange={toggleFilter}
          />
          <span className={styles.labelname}>{value}</span>
        </label>
      </li>
    )
  })
  return (
    <div>
      <div className={styles.buttonContainer}>
        <button onClick={toggleIsOpen} className={styles.button} type="button">
          <span>{FacetType[facetKey]}</span>
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
