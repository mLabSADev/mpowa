import React from 'react'
import Layout from '../components/Layout'
import { cardWrapper } from './Blogs.module.scss'
import NewsItem from '../components/NewsCard/NewsItem'
import Stack from '@mui/material/Stack';
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation/Navigation'
import { getImage } from "gatsby-plugin-image"

function Blogs({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className="roundedMain">
        <Navigation />
        <section id="cta" className="section " style={{ flexDirection: 'column', paddingBottom: 50 }}>
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">Blogs</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>
              <p className="bodyText"></p>
            </div>
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
          </Stack>
        </section>
        <div className={cardWrapper} style={{ justifyContent: 'center' }}>
          {data.blogs.edges.map((c, i) => {
            const image = getImage(c.node.frontmatter.thumb)
            return (<NewsItem data={c} image={image} key={c.node.frontmatter.title} index={i} />)
          })}
        </div>
      </div>

    </Layout>
  )
}

export default Blogs
export const query = graphql`
query BlogsQuery {
  blogs: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(Blogs)/"}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
          author
          thumb {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 500, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
}
`