import React from 'react'
import App from '../app'
import { Link, graphql } from 'gatsby'
import dateFnsParse from 'date-fns/parse'
import dateFnsIsAfter from 'date-fns/is_after'

import Jumbotron from '../components/jumbotron'

const BlogCard = ({ title, excerpt, link }) => (
  <Link to={link} key={link} className="text-decoration-none">
    <div class="p-3 mb-4 border border-secondary rounded rounded-lg card-hover-effect">
      <h5 class="card-title text-decoration-none">{title}</h5>
      <h6 class="card-subtitle mb-2 color-2 text-decoration-none">
        {excerpt}...<strong>Continue reading</strong>
      </h6>
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
      <section className="mb-5 px-3">
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
