import CategoryContainer from '../CategoryContainer'
import FilterDropdown from '../Filter'
import { Logo } from '../Icons/Logo'
import { MenuIcon } from '../Icons/MenuIcon'
import SearchInput from '../searchInput'
import styles from './Results.module.css'

export type ResultProps = {
  results: any
}
const Results = ({ results }: ResultProps) => {
  const facetOptions = Object.keys(results.facets).map((key) => (
    <FilterDropdown label={key} facet={results.facets[key]} />
  ))
  return (
    <div className={styles.root}>
      <div className={styles.top}>Banner </div>
      <div className={styles.container}>
        <div className={styles.left}>
          {facetOptions}
        </div>
        <div className={styles.right}>
          <CategoryContainer label={'Brands'} results={3} />
        </div>
      </div>
    </div>
  )
}

export default Results
