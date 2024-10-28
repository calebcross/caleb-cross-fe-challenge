import styles from './ContentGrid.module.css'

export type ContentGridProps = {
  cards: any[]
}

const ContentGrid = ({ cards }: ContentGridProps) => {
    return <div className={styles.root}>
        <div>card</div>
        <div>card</div>
        <div>card</div>
    </div>
}

export default ContentGrid
