import React,{useState} from 'react'
import {HiMenuAlt4} from "react-icons/hi"
import {IoMdClose} from "react-icons/io"
import { Link } from 'react-scroll'
import { Link as Link1 } from "gatsby"


const Navbar = () => {
  const [show, setShow]= useState(false)
  return (
    <nav className="navbar">
        <Link1 to='/' className="logo nav-link">PORTFOLIO</Link1>
        <button className='nav-btn' onClick={()=> setShow(!show)}><HiMenuAlt4/></button>
        <div className={show? "show-nav" :"show-nav nav-menu"}>
            <div className="center-div">
                <ul className="non-bullet nav-list">
                    <li className="list-inline nav-items"><Link className='nav-link' to="/project/" spy={true} smooth={true}>Projects</Link></li>
                    <li className="list-inline nav-items"><Link className='nav-link' to="contact" spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </div>
            <button className='close-btn' onClick={()=> setShow(!show)}><IoMdClose/></button>
        </div>

    </nav>
  ) 
}

export default Navbar
