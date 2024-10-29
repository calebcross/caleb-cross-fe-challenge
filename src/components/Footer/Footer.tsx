import styles from './Footer.module.css'
import image from './Footer.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className={styles.root}>
      <Image src={image} alt={''} />
    </footer>
  )
}

export default Footer
