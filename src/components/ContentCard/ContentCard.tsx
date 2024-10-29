import styles from './ContentCard.module.css'

export type ContentCardProps = {
  card: any
}

const ContentCard = ({ card }: ContentCardProps) => {
  return <article className={styles.root}>Cardy</article>
}

export default ContentCard
