import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const pages = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' }
  ]

  return (
    <header className="top-bar">
      <nav className="link-ctn" aria-label="Main navigation">
        {pages.map(item => (
          <NavLink key={item.path} className="link" to={item.path} end>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
