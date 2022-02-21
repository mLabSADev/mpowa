const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve('./src/templates/Blog.js')

  const { data } = await graphql(`
    {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(news)/"}}
            sort: {fields: frontmatter___date, order: DESC}
          ) {
            edges {
              node {
                excerpt
                frontmatter {
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
      path: `/Blogs${node.frontmatter.path}`,
      component: BlogTemplate,
      context: {
        article: node.frontmatter.path,
        slug: node.frontmatter.path
      }
    })
  })
}