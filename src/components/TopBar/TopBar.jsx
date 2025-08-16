import './TopBar.css'

import { Link } from 'react-router-dom'


const TopBar = () => {
  return (
    <div className='top-bar' >

      <div className='link-ctn' >

        <Link className='link' to='/'>
          <h1>ABOUT</h1>
        </Link>

        <Link className='link' to='skills'>
          <h1>SKILLS</h1>
        </Link>

        <Link className='link' to='/projects'>
          <h1>PROJECTS</h1>
        </Link>

        <Link className='link' to='/resume'>
          <h1>RESUME</h1>
        </Link>

        <Link className='link' to='contacts'>
          <h1>CONTACTS</h1>
        </Link>

      </div>

    </div>
  )
}

export default TopBar
