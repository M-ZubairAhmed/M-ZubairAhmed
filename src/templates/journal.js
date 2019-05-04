import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from './layout'

class Journal extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const mainSiteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const {
      title: blogTitle,
      date: blogDate,
      excerpt: blogDescription,
      tags: blogTags,
    } = post.frontmatter

    return (
      <Layout
        title={blogTitle || mainSiteTitle}
        description={blogDescription}
        location={this.props.location}
        meta={blogTags}>
        <h1>{blogTitle}</h1>
        <p>{blogDate}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <ul>
          <li>
            {previous && (
              <Link to={`blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Journal

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
