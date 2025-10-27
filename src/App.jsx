import { Route, Routes } from 'react-router-dom'

// component imports
import Projects from './pages/Projects/Projects'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Resume from './pages/Resume/Resume'
import Info from './components/Info/Info'

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
        </Routes>

      </div>

      <div className='decoration1 decoration' ></div>
      {/* <div className='decoration2 decoration' ></div> */}
      <div className='decoration3 decoration' ></div>

    </div>
  )
}

export default App
