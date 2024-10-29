import { IBrand, IProduct, ISeller } from '@/types/apiTypes'
import ContentGrid from '../ContentGrid'
import { ResultType } from '../Results/Results'
import styles from './CategoryContainer.module.css'

export type CategoryContainerProps = {
  label: string
  results: IProduct[] | IBrand[] | ISeller[]
}

const CategoryContainer = ({ label, results }: CategoryContainerProps) => {
  const resultKey = label as keyof typeof ResultType
  return (
    <section className={styles.root}>
      <div className={styles.top}>
        <h2>{label}</h2>
        <div>
          {results.length} Result{results.length > 1 ? 's' : ''}
        </div>
      </div>
      <div className={styles.bottom}>
        <ContentGrid type={ResultType[resultKey]} cards={results} />
      </div>
    </section>
  )
}

export default CategoryContainer
