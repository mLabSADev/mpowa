const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve('./src/templates/Blog.js')

  const { data } = await graphql(`
    {
        allMarkdownRemark(
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
                  path
                }
                id
              }
            }
          }
    }
    `)
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: BlogTemplate,
      context: {
        article: node.frontmatter.title,
      }
    })
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `images` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}