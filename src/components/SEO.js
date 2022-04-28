import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({description}) => {
  const data= useStaticQuery(query)
  const obj= data.site.siteMetadata
  const metaDesc= description || obj.description
  return (
    <Helmet
    htmlAttributes={{lang:"en"}}
    title={`${obj.title} | ${metaDesc}`}
    ></Helmet>
  )
}

export default SEO