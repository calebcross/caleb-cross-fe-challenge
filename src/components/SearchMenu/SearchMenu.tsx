'use client'
import styles from './SearchMenu.module.css'
const searchMenu = () => {

  return (
    <div className={styles.root}>
      <button className={styles.button}>Marketplace</button>
      <button className={styles.button}>Brands A-Z</button>
      <button className={styles.button}>Makeup</button>
      <button className={styles.button}>Hair</button>
      <button className={styles.button}>Skincare</button>
      <button className={styles.button}>Nails</button>
      <button className={styles.button}>Tools & Brushes</button>
      <button className={styles.button}>Fragrances</button>
      <button className={styles.button}>Body</button>
    </div>
  )
}

export default searchMenu
