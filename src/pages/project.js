import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Namecard from '../components/Namecard'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        description {
          description
        }
        github
        live
        featured
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
const Project = () => {
    const data= useStaticQuery(query)
    const projects= data.allContentfulProject.nodes
  return (
    <Layout>
        <SEO description = "Projects"/>
        <Projects projects={projects} />
        <Namecard/>
    </Layout>
  )
}

export default Project