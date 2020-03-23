import React from 'react'
import App from '../app'
import { graphql, Link } from 'gatsby'

import { Jumbotron, formatDate } from '../common/components'

const BlogCard = ({
  path = '/',
  title = '',
  status = 'draft',
  date = '',
  excerpt = '',
}) => (
  <Link to={path}>
    <div className="card mb-3">
      <div className="card-content">
        <h3 className="title is-4">{title}</h3>
        <div className="content">
          <p>
            <b>{status === 'draft' ? 'Draft' : formatDate(date)}</b>
          </p>
          <p>
            {excerpt}...<strong>continue reading</strong>
          </p>
        </div>
      </div>
    </div>
  </Link>
)

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
      <section className="container">
        {blogs.map((blog) => (
          <BlogCard key={blog.path} {...blog} />
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
            status
          }
        }
      }
    }
  }
`
