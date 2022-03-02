import React from 'react'
import Layout from '../components/Layout'
import { col, phoneImage, content } from './Blog.module.scss'
import { Stack } from '@mui/material'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
function Blog({ data }) {
  console.log(data)
  const image = getImage(data.markdownRemark.frontmatter.thumb)
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
            </div>
          </div>
          <div className={col} style={{ paddingBottom: 0 }}>
            <GatsbyImage className={phoneImage} image={image} alt={data.markdownRemark.frontmatter.title} />
            {/* <StaticImage className={phoneImage} src="../images/gradienta-tHtZo3FLhPc-unsplash.jpg" alt="prototype" placeholder="blurred" /> */}
          </div>
        </section>
          <div className={content}>
            <div className="bodyText" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
          </div>
          </div>
          
       

      </div>

    </Layout>
  )
}

export default Blog

export const query = graphql`
query myQueryAndMyQuery ($article:String) {
  markdownRemark(
    frontmatter: {title: {eq: $article}}
  ) {
    frontmatter {
      title
      author
      date
      
      thumb {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 900, formats: AUTO, placeholder: BLURRED)
        }
      }
    }
    excerpt
    html
  }
}

`