import React from 'react'
import Layout from '../templates/layout'
import { Link } from 'gatsby'
import dateFNSParse from 'date-fns/parse'
import dateFnsIsAfter from 'date-fns/is_after'

import Jumbotron from '../components/jumbotron'

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

    const dateFormatted = dateFNSParse(date)

    return { dateFormatted, ...frontmatter }
  }).sort(
    (blogA, blogB) => !dateFnsIsAfter(blogA.dateFormatted, blogB.dateFormatted),
  )

  return (
    <Layout
      title="Blog"
      description="Writing small blog posts, so i can share what i have experience and learned"
      location={props.location}>
      <header>
        <Jumbotron
          title="My Blog"
          description="Writing small blog posts, so i can share what i have experience and learned"
        />
      </header>
      <section>
        {blogs.map((blog) => (
          <Link to={blog.path} key={blog.path} className="text-decoration-none">
            <div class="card mb-3 card-hover-effect">
              <div class="card-body">
                <h5 class="card-title text-dark text-decoration-none">
                  {blog.title}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
                  {blog.excerpt}...<strong>Continue reading</strong>
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
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
