import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Dont replace
// Must be put in every page
const Tab = ({ title, abstract }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${title} - ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={abstract ? abstract : "mlab content"} />
      <html lang="en" />
    </Helmet>
  )
}

export default Tab
