import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import {BsGithub} from "react-icons/bs"

const query = graphql`
  {
    allContentfulProject(sort: {fields: title, order: DESC}) {
      nodes {
        title
        description {
          description
        }
        github
        live
        featured
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Projects = () => {

    const data= useStaticQuery(query)
    const projects= data.allContentfulProject.nodes
    console.log(projects)
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
                     <li><a href= {github} class="project-link project-link-primary">Github <BsGithub/></a></li>
                      <li><a href= {live} class="project-link project-link-secondary">Live Demo →</a></li>
                 </ul>
                 <hr></hr>
             </div> 
        })}
        </div>

    </section>
  )
}

export default Projects