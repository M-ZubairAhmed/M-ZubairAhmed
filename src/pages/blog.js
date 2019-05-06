import React from 'react'
import App from '../app'
import { Link, graphql } from 'gatsby'
import dateFnsParse from 'date-fns/parse'
import dateFnsIsAfter from 'date-fns/is_after'

import Jumbotron from '../components/jumbotron'

const BlogCard = ({ title, excerpt, link }) => (
  <Link to={link} key={link} className="text-decoration-none">
    <div class="card mb-3 card-hover-effect">
      <div class="card-body">
        <h5 class="card-title text-dark text-decoration-none">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
          {excerpt}...<strong>Continue reading</strong>
        </h6>
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
      node: {
        frontmatter: { date },
      },
      node: { frontmatter },
    } = edge

    const dateFormatted = dateFnsParse(date)

    return { dateFormatted, ...frontmatter }
  }).sort(
    (blogA, blogB) => !dateFnsIsAfter(blogA.dateFormatted, blogB.dateFormatted),
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
      <section className="mb-7 px-3">
        {blogs.map((blog) => (
          <BlogCard
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
          }
        }
      }
    }
  }
`
