import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">PORTFOLIO</div>
        <ul className="non-bullet nav-menu">
            <li className="list-inline nav-items">Projects</li>
            <li className="list-inline nav-items">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar