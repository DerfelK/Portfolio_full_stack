import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import './App.scss'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      </div>
    </div>
  )
}

export default App
