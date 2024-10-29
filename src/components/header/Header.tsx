import { Logo } from '../Icons/Logo'
import { MenuIcon } from '../Icons/MenuIcon'
import SearchInput from '../SearchInput'
import styles from './Header.module.css'
const Header = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.navContainer}>
        <div className={styles.leftContainer}>
          <MenuIcon />
        </div>
        <a href="/" className={styles.middleContainer}>
          <Logo />
        </a>
        <div></div>
      </div>
    </nav>
  )
}

export default Header
