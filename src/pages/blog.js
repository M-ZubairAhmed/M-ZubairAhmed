import React from 'react'
import Layout from '../components/layout'
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
  }).sort((blogA, blogB) =>
    !dateFnsIsAfter(blogA.dateFormatted, blogB.dateFormatted),
  )

  return (
    <Layout>
      <header>
        <Jumbotron
          title="My Blog"
          description="Writing small blog posts, so i can share what i have experience and learned"
        />
      </header>
      <section>
        {blogs.map((blog) => (
          <div class="card mb-3">
            <div class="card-body">
              <Link to={blog.path}>
                <h5 class="card-title text-dark">{blog.title}</h5>
              </Link>
              <h6 class="card-subtitle mb-2 text-muted">{blog.excerpt}</h6>
            </div>
          </div>
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
