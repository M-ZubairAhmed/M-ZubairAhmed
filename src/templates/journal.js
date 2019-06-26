import React from 'react'
import { graphql } from 'gatsby'

import App from '../app'
import BlogFooter from '../components/blog-footer'
import BlogHeader from '../components/blog-header'

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
      <BlogHeader
        title={blogTitle}
        description={blogDate}
        timeToRead={timeToRead}
        className="pb-1 px-1"
      />
      <article
        className="blogger px-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr className="blogger-hr mb-5" />
      <BlogFooter />
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
