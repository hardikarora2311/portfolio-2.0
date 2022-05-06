import React from 'react'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import {BsGithub} from "react-icons/bs"
import { Link as Link1 } from "gatsby"



const Projects = ({projects=[]}) => {
  return (
    <section className="project-section">
        <h3>EXPERIENCE</h3>
        <p>Latest Projects</p>
        <div className="project">
           {projects.map((project)=> {
             const {title,github, live,image,description:{description}}= project;
             const imgPath= getImage(image)
             return <div className='project-text'>
                 <GatsbyImage image= {imgPath} 
                 alt= {title}
                 className="project-img"
                 />
                 <h2>{title}</h2>
                 <p>{description}</p>
                 <ul className="link-list">
                     <li><a target="_blank" href= {github} class="project-link project-link-primary">Github <BsGithub/></a></li>
                      <li><a target="_blank" href= {live} class="project-link project-link-secondary">Live Demo →</a></li>
                 </ul>
                 <hr></hr>
             </div> 
        })}
        </div>
    </section>
  )
}

export default Projects