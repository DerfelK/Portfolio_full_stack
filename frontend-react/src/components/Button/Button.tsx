import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { BsSun } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import './Button.scss'

const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme === 'dark'
    })

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light')
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode, setTheme])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={theme}>
            <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <BsSun className='sun' />
                <BsFillMoonFill className='moon' />
            </label>
            </div>
        </div>
    )
}

export default Button
