import React from 'react'
import { graphql, Link } from 'gatsby'

import App from '../app'
import { Emoji } from '../common/components'

export default ({ data, location }) => {
  const {
    markdownRemark: {
      timeToRead,
      html,
      frontmatter: {
        title,
        date,
        excerpt,
        tags,
        cover,
        path,
        corrections,
        comments,
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
      title={title}
      description={excerpt}
      image={cover}
      location={location}
      meta={tags}
      coverPhoto={cover}
      path={path}>
      <header class="hero is-medium">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">{title}</h1>
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
          className="blogger"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr className="blogger-hr" />
      </section>
      <footer style={{ textAlign: 'center' }}>
        <h3 className="title is-5 has-text-weight-normal mb-3">
          <Emoji symbol="💞" className="title is-2" />
          Thank you so much for reading. If you are interested{' '}
          <Link to="/blog" className="is-italic has-text-weight-medium">
            here are
          </Link>{' '}
          my other blog posts.
        </h3>
        {comments && (
          <a
            href={comments}
            target={'_blank'}
            rel="noopener noreferrer"
            className="subtitle is-6 has-text-weight-thin">
            Comment on Twitter
          </a>
        )}
        {corrections && (
          <a
            href={corrections}
            target={'_blank'}
            rel="noopener noreferrer"
            className="subtitle is-6 has-text-weight-thin">
            {' '}
            - Edit on Github -{' '}
          </a>
        )}
        <a
          href={'https://github.com/M-ZubairAhmed/mzubairahmed.com/issues/new'}
          target={'_blank'}
          rel="noopener noreferrer"
          className="subtitle is-6 has-text-weight-thin">
          Report an issue
        </a>
      </footer>
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
        comments
        corrections
      }
    }
  }
`
