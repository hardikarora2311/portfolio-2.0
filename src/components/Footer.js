import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-name">
        <p>HARDIK ARORA</p>
        <span>&copy; {new Date().getFullYear()} | All rights reserved.</span>
      </div>
      <div className="footer-contact">
        Home | Projects | Contact
      </div>
    </footer>
  )
}

export default Footer