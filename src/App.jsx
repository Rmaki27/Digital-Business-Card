import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import headshot from './headshot.jpg'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
          {/* <img src={headshot} className="headshot" alt="profile picture" /> */}
          <Info />
          <div className='about-interests-container'>
            <About />
            <Interests />
          </div>
          <Footer />
      </div>
    </>
  )
}

export default App
