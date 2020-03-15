import React from 'react'
import App from '../app'
import { graphql } from 'gatsby'

import { BlogCard, Jumbotron } from '../common/components'

export default (props) => {
  const {
    data: {
      allMarkdownRemark: { edges: BlogsEdges },
    },
  } = props

  const blogs = BlogsEdges.map((edge) => {
    const {
      node: { frontmatter },
    } = edge

    return frontmatter
  }).sort(
    (blogA, blogB) => parseInt(blogA.serial, 10) < parseInt(blogB.serial, 10),
  )

  return (
    <App
      title="Blog"
      description="Writing small blog posts, so i can share what i have learned and experienced"
      location={props.location}>
      <Jumbotron
        title="My Blog"
        description="Writing small blog posts, so i can share what i have experience and learned"
      />
      <section className="mb-5 px-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.path}
            title={blog.title}
            excerpt={blog.excerpt}
            link={blog.path}
          />
        ))}
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            excerpt
            path
            serial
          }
        }
      }
    }
  }
`
