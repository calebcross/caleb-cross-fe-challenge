import ContentGrid from '../ContentGrid'
import styles from './CategoryContainer.module.css'

export type CategoryContainerProps = {
  label: string
  results: number
}

const CategoryContainer = ({ label, results }: CategoryContainerProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.top}>
        <h2>{label}</h2>
        <div>
          {results} Result{results > 1 ? 's' : ''}
        </div>
      </div>
          <div className={styles.bottom}>
          <ContentGrid label={''} results={0} /></div>
    </section>
  )
}

export default CategoryContainer
