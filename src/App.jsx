import { Route, Routes } from 'react-router-dom'

// component imports
import Projects from './pages/Projects/Projects.jsx'
import Home from './pages/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Resume from './pages/Resume/Resume.jsx'
import Info from './components/Info/Info.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {

  return (
    <div className='app' >

      <Navbar/>
      
      <div className='routes-div' >

        <Info />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>

      <div className='decoration1 decoration' ></div>
      {/* <div className='decoration2 decoration' ></div> */}
      <div className='decoration3 decoration' ></div>

    </div>
  )
}

export default App
