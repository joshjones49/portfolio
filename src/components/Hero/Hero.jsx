import './Hero.css'

import { Routes, Route } from 'react-router-dom'

import About from '../About/About.jsx'
import Home from '../Home/Home.jsx'
import Resume from '../Resume/Resume.jsx'
import Github from '../Github/Github.jsx'
import Contact from '../Contact/Contact.jsx'

const Hero = () => {
  return (
    <div className='hero'>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/github-projects' element={<Github />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Hero
