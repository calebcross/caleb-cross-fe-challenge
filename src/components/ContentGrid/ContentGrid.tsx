import { IBrand, IProduct, ISeller } from '@/types/apiTypes'
import ContentCard from '../ContentCard'
import ContentCardBrand from '../ContentCard/ContentCardBrand'
import ContentCardProduct from '../ContentCard/ContentCardProduct'
import ContentCardSeller from '../ContentCard/ContentCardSeller'
import { ResultType } from '../Results/Results'
import styles from './ContentGrid.module.css'

export type ContentGridProps = {
  cards: any[]
  type: ResultType
}

const ContentGrid = ({ cards, type }: ContentGridProps) => {
  return (
    <div className={styles.root}>
      {cards.map((card, index) => {
        switch (type) {
          case 'Sellers':
            return <ContentCardSeller seller={card} key={`${type}_${index}`} />
          case 'Brands':
            return <ContentCardBrand brand={card} key={`${type}_${index}`} />
          case 'Products':
            return (
              <ContentCardProduct product={card} key={`${type}_${index}`} />
            )
          default:
            return <ContentCard {...card} key={`${type}_${index}`} />
        }
      })}
    </div>
  )
}

export default ContentGrid
