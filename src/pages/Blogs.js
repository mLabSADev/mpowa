import React from 'react'
import Layout from '../components/layout'
import { cardWrapper } from './Blogs.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import NewsItem from '../components/NewsCard/NewsItem'
import Stack from '@mui/material/Stack';
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation/Navigation'
function Blogs({data}) {
  return (
    <Layout>
      <section id="cta" className="section appBG" style={{ flexDirection: 'column', paddingBottom: 50 }}>
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
        <div className={cardWrapper} style={{ justifyContent: 'center' }}>
          {data.news.edges.map((c, i) => {
            return (<NewsItem data={c} key={i} />)
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blogs
export const query = graphql`
query MyQuery {
  news: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(news)/"}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          path
          title
          date
          author
        }
        id
      }
    }
  }
}

`