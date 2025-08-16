import { Route, Routes } from 'react-router-dom'

// component imports
import Projects from './pages/Projects/Projects'
import Home from './pages/Home/Home'
import TopBar from './components/TopBar/TopBar'

function App() {

  return (
    <div className='app' >
      <TopBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
