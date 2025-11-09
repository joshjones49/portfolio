import './Navbar.css'

import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()

  const pages = [
    {path: '/', label: 'ABOUT'},
    {path: '/resume', label: 'RESUME'},
    {path: '/projects', label: 'PROJECTS'},
    // {path: '/contact', label: 'CONTACT'}
  ]

  const visibleNavItems = pages.filter(item => item.path !== location.pathname);

  return (

    <div className='top-bar' >

      <div className="link-ctn">
        {visibleNavItems.map((item, index) => (
          <Link key={index} className='link' to={item.path} >
            <h1>{item.label}</h1>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Navbar
