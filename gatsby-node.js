const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const query = `
      {
        allMdx(
          ${
            process.env.NODE_ENV === 'production'
              ? 'filter: { frontmatter: { draft: { ne: true } } }'
              : ''
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  const result = await graphql(query)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const { slug } = post.node.fields
    // eslint-disable-next-line
    const [_, fileExtension] = post.node.fileAbsolutePath.split('.')

    const githubUrl = `https://github.com/andreidobrinski/blog/tree/main/content/blog${slug}index.${fileExtension}`

    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
        previous,
        next,
        githubUrl,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean
    }
  `
  createTypes(typeDefs)
}
