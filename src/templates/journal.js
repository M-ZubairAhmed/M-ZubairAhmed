import React from 'react'
import { graphql } from 'gatsby'

import App from '../app'
import BlogFooter from '../components/blog-footer'
import BlogHeader from '../components/blog-header'

const Journal = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const mainSiteTitle = data.site.siteMetadata.title
  const {
    title: blogTitle,
    date: blogDate,
    excerpt: blogDescription,
    tags: blogTags,
  } = post.frontmatter
  const rawDate = new Date(blogDate)
  const _blogDate = rawDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const { previous, next } = pageContext
  const nextArticle = {
    continueFurther: next ? true : false,
    path: next ? next.fields.slug : '',
    title: next ? next.frontmatter.title : '',
  }
  const previousArticle = {
    continueFurther: previous ? true : false,
    path: previous ? previous.fields.slug : '',
    title: previous ? previous.frontmatter.title : '',
  }

  return (
    <App
      title={blogTitle || mainSiteTitle}
      description={blogDescription}
      location={location}
      meta={blogTags}>
      <BlogHeader
        title={blogTitle}
        description={_blogDate}
        className="pb-1 px-1"
      />
      <article
        className="blogger px-1"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr className="blogger-hr mb-5" />
      <BlogFooter previousArticle={previousArticle} nextArticle={nextArticle} />
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        tags
        excerpt
      }
    }
  }
`

export default Journal
