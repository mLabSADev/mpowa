import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { cardWrapper } from './Blogs.module.scss'
import NewsItem from '../components/NewsCard/NewsItem'
import Stack from '@mui/material/Stack';
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation/Navigation'
import { getImage } from "gatsby-plugin-image"
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
function Blogs({ data }) {

  const [activeFilter, setActiveFilter] = useState('all')
  const [filtered, setFiltered] = useState([])
  const [originaEdges, setOriginalEdges] = useState([])

  const filterBlogs = (val) => {
    if (val === 'all') {
      setFiltered(data.blogs.edges)
      setActiveFilter(val)
      
      return;
    }
    setActiveFilter(val)
    const f = originaEdges.filter((blog) => blog.node.frontmatter.category.includes(val))
    setFiltered(f)
  }

  useEffect(() => {
    setFiltered(data.blogs.edges)
    setOriginalEdges(data.blogs.edges)
  }, [])
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
              <p className="bodyText" >
                <Stack direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}>
                  <Chip label="All" color='info' variant={activeFilter === 'all' ? 'filled': 'outlined'} clickable={true} onClick={() => { filterBlogs('all') }} />
                  <Chip label="Employment" color='info'variant={activeFilter === 'Employment' ? 'filled': 'outlined'} clickable={true} onClick={() => { filterBlogs('Employment') }} />
                  <Chip label="Education" color='info'variant={activeFilter === 'Education' ? 'filled': 'outlined'} clickable={true} onClick={() => { filterBlogs('Education') }} />
                  <Chip label="Entrepreneurship" color='info'variant={activeFilter === 'Entrepreneurship' ? 'filled': 'outlined'} clickable={true} onClick={() => { filterBlogs('Entrepreneurship') }} />
                </Stack>

              </p>
            </div>
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
          </Stack>
        </section>
        <motion.div layout className={cardWrapper} style={{ justifyContent: 'center' }}>
          {filtered.map((c, i) => {
            const image = getImage(c.node.frontmatter.thumb)
            return (<NewsItem data={c} image={image} key={c.node.frontmatter.title} index={i} />)
          })}
        </motion.div>
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
          category
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