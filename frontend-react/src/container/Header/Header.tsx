import { useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles[theme]}`}>
      <div className={`${styles.app__header} app__flex`}>
      
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__headerinfo}
      >
        <div className={styles.app__headerbadge}>
          <div className={`${styles.badgecmp} app__flex`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Rafael</h1>
            </div>
          </div>
          <div className={`${styles.tagcmp} app__flex`}>
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__headerimg}
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className={styles.overlay_circle}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__headercircles}
      >
        {[images.redux, images.react, images.tailwindcss].map((circle, index) => (
          <div className={`${styles.circlecmp} app__flex`} key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Header, 'home', 'myclass')