import { useState, useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './Navbar.module.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Button from '../Button/Button'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={`${styles.nav} ${styles[theme]}`}>
        <nav className={styles.app__navbar}>
        <div className={styles.app__navbarlogo}>
            <img src={images.logo} alt="Logo" />
        </div>
        <ul className={styles.app__navbarlinks}>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className={`${styles.app__flex} p-text`} key={`link-${item}`}>
                    <div/>
                        <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <Button />        
        <div className={styles.app__navbarmenu}>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>

            {toggle && (
                <motion.div
                    whileInView={{ x:[300,0] }}
                    transition={{ duration: 0.85, ease: 'easeOut'}}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
        </nav>
    </div>
  )
}

export default Navbar