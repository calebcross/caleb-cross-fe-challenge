import styles from './ThreeByOneGrid.module.css'
import image from './ThreeByOne.png'
import Image from 'next/image'
const ThreeByOneGrid = () => {
  return (
    <div className={styles.root}>
      <Image src={image} alt={''} />
    </div>
  )
}

export default ThreeByOneGrid
