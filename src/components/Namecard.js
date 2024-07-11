import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {MdEmail} from "react-icons/md"
import {FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa"


const Namecard = () => {
  return (
    <div className="card">
        <div className="card-content">
            <StaticImage src="../assets/images/me.jpeg" className='card-image'
            placeholder='blurred' alt='Hardik' layout='fullWidth'/>
            <div className="info">
                <div className="name">
                    <h4>Hardik Arora</h4>
                    <small>Generative AI Full Stack Developer</small>
                </div>
                <div className="contact-info">
                    <div className='mail'><MdEmail className='mail-icon'/>hardikarora826@gmail.com</div>
                    <div className="icons">
                        <a href='https://www.linkedin.com/in/hardika2311/' className='links'><FaLinkedin/></a>
                        <a href='https://github.com/hardikarora2311' className='links'><FaGithub/></a>
                        <a href='https://twitter.com/HardikA2311_' className='links'><FaTwitter/></a>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Namecard
