import React from 'react'
import App from '../app'
import { graphql, Link } from 'gatsby'

import { Jumbotron } from '../common/components'

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
  }).sort((blogA, blogB) => Number(blogB.serial) - Number(blogA.serial))

  return (
    <App
      title="Blog"
      description="Writing small blog posts, so i can share what i have learned and experienced"
      location={props.location}>
      <Jumbotron
        title="My Blogposts"
        description="Writing small blog posts, so i can share what i have experience and learned"
      />
      <div className="container">
        {blogs.map((blog) => (
          <Link to={blog.path} key={blog.path}>
            <div class="card mb-3">
              <div class="card-content">
                <p class="title is-4">{blog.title}</p>
                {blog.status === 'draft' ? (
                  <p class="subtitle is-6">
                    <i>Draft</i>
                  </p>
                ) : (
                  <p class="subtitle is-6">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                )}
                <p class="subtitle is-6">
                  {blog.excerpt}...<strong>continue reading</strong>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
            status
          }
        }
      }
    }
  }
`
