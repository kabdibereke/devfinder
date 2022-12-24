import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.scss'



const Header = () => {
  return (
    <div className={styles.header}>
        <p className={styles.headerLogo}>devfinder</p>
        <ThemeSwitcher/>
    </div>
  )
}

export default Header