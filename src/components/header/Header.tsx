import SearchInput from '../searchInput'
import styles from './Header.module.css'
const Header = () => {
  return (
    <nav className={styles.root}>
      <SearchInput placeholder="Search by Brand, Product or Category" />
    </nav>
  )
}

export default Header
