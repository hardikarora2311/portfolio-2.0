import React,{useState} from 'react'
import {HiMenuAlt4} from "react-icons/hi"
import {IoMdClose} from "react-icons/io"

const Navbar = () => {
  const [show, setShow]= useState(false)
  return (
    <nav className="navbar">
        <div className="logo">PORTFOLIO</div>
        <button className='nav-btn' onClick={()=> setShow(!show)}><HiMenuAlt4/></button>
        <div className={show? "show-nav" :"show-nav nav-menu"}>
            <div className="center-div">
                <ul className="non-bullet nav-list">
                    <li className="list-inline nav-items">Projects</li>
                    <li className="list-inline nav-items">Contact</li>
                </ul>
            </div>
            <button className='close-btn' onClick={()=> setShow(!show)}><IoMdClose/></button>
        </div>

    </nav>
  ) 
}

export default Navbar