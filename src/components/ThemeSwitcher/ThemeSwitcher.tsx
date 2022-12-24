import { useEffect, useState } from "react"
import  moon   from "../../assets/icon-moon.svg"
import  sun   from "../../assets/icon-sun.svg"
import styles from './ThemeSwitcher.module.scss'


const ThemeSwitcher = () => {
    const [isDark, setIsDark] =useState(false)
    const textColor = isDark? 'LIGHT': "DARK" 
    const themeIcon = isDark? sun: moon
    useEffect(()=> {
        document.body.setAttribute('data-theme' , isDark? 'dark': 'light')
    }, [isDark])
  return (
    <div className={styles.themeSwitcher}  onClick={()=> setIsDark(!isDark)}>
        <div className={styles.textColor}>{textColor}</div>    
         <img src={themeIcon} alt="dsf" />
       
    </div>
  )
}

export default ThemeSwitcher