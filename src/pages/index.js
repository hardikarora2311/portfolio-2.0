import React from "react"
import heroGif from "../assets/images/wave-black-new.gif"
import Timeline from "../components/Timeline"
import Projects from "../components/Projects"
import Namecard from "../components/Namecard"
import { Link } from "react-scroll"
import Layout from "../components/Layout"
import Form from "../components/Form"
import SEO from "../components/SEO"
import { useStaticQuery, graphql } from "gatsby"
import { Link as Link1 } from "gatsby"

const query = graphql`
  {
    allContentfulProject(sort: {fields: title, order: ASC}) {
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

export default function Home() {
  const data= useStaticQuery(query)
  const projects= data.allContentfulProject.nodes
  return(
    <Layout>
      <SEO/>
      <header className="hero">
        <img src= {heroGif} className="hero-img" alt="wave gif"/>
        <div className="hero-text">
          <h2>HI, I AM HARDIK ARORA</h2>
          <h1>I help local businesses and early startups build their online presence.</h1>
          <div className="hero-links">
             <Link className="link hero-link-primary" to="contact" spy={true} smooth={true}>GET IN TOUCH</Link>
              <Link1 className="link hero-link-secondary" to="/project">VIEW MY WORK →</Link1>   
          </div>
        </div>
      </header>
      <section className="about-work">
        <h3>I help you with building a website which will be</h3>
        <div className="keywords">
           BLAZING FAST. RESPONSIVE. CUSTOMISABLE.
        </div>
        <p>At the end, you'll experience a <span>conversion</span>-centered, <span>fast</span> performing, & <span>SEO</span> friendly website.</p>
      </section>


      <section className="process">
        <div className="heading">
          <h3>PROCESS</h3>
          <p>A WELL-STRUCTURED PROCESS FOR BUILDING YOUR NEW WEBSITE.</p>
        </div>
        <p className="process-desc">
      We'll go through this process together to make sure that the newly-designed website hits the mark.
        </p>
        <Timeline/>
      </section>

      
      <div id="projects"> <Projects projects={projects}/></div>
      <div id="contact">
        <h3>Interested in working together?</h3>
        <small>Feel free to contact me for any project or collaboration.</small>
        <Form/>
      </div>


      <Namecard/>      

      
    </Layout>
  )
}
