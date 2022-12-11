import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className='navigation'>
      <NavLink to='/' className='nav-title'>
        Jessica Fealy - Portfolio
      </NavLink>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/college'>College</NavLink>
          </li>
          <li>
            <NavLink to='/university'>University</NavLink>
          </li>
          <li>
            <NavLink to='/experience'>Experience</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact Me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
