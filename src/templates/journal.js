import React from 'react'
import { graphql } from 'gatsby'

import App from '../app'

export default ({ data, location }) => {
  const {
    markdownRemark: {
      timeToRead,
      html,
      frontmatter: {
        title: blogTitle,
        date,
        excerpt: blogDescription,
        tags: blogTags,
        cover: blogCoverImage,
        path: blogPath,
      },
    },
  } = data

  const blogDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <App
      title={blogTitle}
      description={blogDescription}
      image={blogCoverImage}
      location={location}
      meta={blogTags}
      coverPhoto={blogCoverImage}
      path={blogPath}>
      <header class="hero is-medium">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">{blogTitle}</h1>
            <h2 class="subtitle">{blogDate}</h2>
            <h2 class="subtitle">
              {parseInt(timeToRead, 10) === 1
                ? `${timeToRead} min read`
                : `${timeToRead} mins read`}{' '}
            </h2>
          </div>
        </div>
      </header>
      <section className="container">
        <article
          className="blogger px-1"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr className="blogger-hr mb-5" />
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        tags
        excerpt
        cover
        path
      }
    }
  }
`
