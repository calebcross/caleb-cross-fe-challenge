'use client'
import { useEffect, useState } from 'react'
import CategoryContainer from '../CategoryContainer'
import FilterDropdown from '../Filter'

import styles from './Results.module.css'
import { ResultContext } from '@/context/ResultContext'
import { IBrand, IProduct, IResult, ISeller } from '@/types/apiTypes'
import { parseAsString, useQueryState } from 'nuqs'
import SortButton from '../SortButton'

export type ResultProps = {
  results: IResult
}
export enum ResultType {
  sellers = 'Sellers',
  brands = 'Brands',
  products = 'Products',
}
const Results = ({ results }: ResultProps) => {
  const {
    products: productsFromApi,
    merchants: brandsFromApi,
    users: usersFromApi,
    meta,
  } = results

  useEffect(() => {
    //Update UI for sort updates
    setProducts(productsFromApi)
  }, [productsFromApi])

  const [products, setProducts] = useState<IProduct[]>(productsFromApi)
  const [merchants, setMerchants] = useState<IBrand[]>(brandsFromApi)
  const [sellers, setSellers] = useState<ISeller[]>(usersFromApi)
  const [query] = useQueryState('query', parseAsString)

  const facetOptions = Object.keys(results.facets).map((key) => (
    <FilterDropdown key={key} label={key} facet={results.facets[key]} />
  ))
  return (
    <div className={styles.root}>
      <ResultContext.Provider
        value={{
          products,
          setProducts,
          merchants,
          setMerchants,
          sellers,
          setSellers,
        }}
      >
        <div className={styles.top}>
          <div>
            <div className={styles.querytext}>"{query}"</div>
            {meta ? `${meta.totalHits} results` : ''}
          </div>
          <div>
            <SortButton />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>{facetOptions}</div>
          <div className={styles.right}>
            {sellers ? (
              <CategoryContainer label={'sellers'} results={sellers} />
            ) : null}
            {merchants ? (
              <CategoryContainer label={'brands'} results={merchants} />
            ) : null}
            {products ? (
              <CategoryContainer label={'products'} results={products} />
            ) : null}
          </div>
        </div>
      </ResultContext.Provider>
    </div>
  )
}

export default Results
