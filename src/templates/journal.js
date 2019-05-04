import React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'
import BlogFooter from '../components/blog-footer'

const Journal = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const mainSiteTitle = data.site.siteMetadata.title
  const {
    title: blogTitle,
    date: blogDate,
    excerpt: blogDescription,
    tags: blogTags,
  } = post.frontmatter
  
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
    <Layout
      title={blogTitle || mainSiteTitle}
      description={blogDescription}
      location={location}
      meta={blogTags}>
      <h1>{blogTitle}</h1>
      <p>{blogDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <BlogFooter previousArticle={previousArticle} nextArticle={nextArticle} />
    </Layout>
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
