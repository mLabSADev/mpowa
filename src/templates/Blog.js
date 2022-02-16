import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { col, phoneImage } from './Blog.module.scss'
import { Stack } from '@mui/material'
import { graphql } from 'gatsby'
function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className="roundedMain">
        <section id="intro" className="section blogSection">
          <div className={col}>
            <div>
              <p className="pageTitle">{data.markdownRemark.frontmatter.title.replaceAll('-', ' ')}</p>
              <div className="lineWrapper">
                <div className="line"></div>
              </div>
              <p className="bodyText">{data.markdownRemark.excerpt}</p>
              <cButton text="Learn More" link="/about"></cButton>
            </div>
          </div>
          <div className={col} style={{ paddingBottom: 0 }}>
            <StaticImage className={phoneImage} src="../images/gradienta-tHtZo3FLhPc-unsplash.jpg" alt="prototype" placeholder="blurred" />
          </div>
        </section>
        <Stack sx={{ pl: 20, pr: 20, pt: 10, pb: 10 }}>
          <div className="bodyText" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>

          </div>
        </Stack>

      </div>

    </Layout>
  )
}

export default Blog

export const query = graphql`
query myQueryAndMyQuery ($article:String) {
  markdownRemark(
    frontmatter: {path: {eq: $article}}
  ) {
    frontmatter {
      path
      title
      author
      date
      tags
      thumb
    }
    excerpt
    html
  }
}

`