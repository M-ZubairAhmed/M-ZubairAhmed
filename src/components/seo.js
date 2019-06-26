import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default ({
  description = 'Webspace for M Zubair Ahmed',
  lang = 'en',
  meta = [],
  keywords = [],
  title = 'M Zubair Ahmed',
  path = 'https://mzubairahmed.ml',
  coverPhoto = 'https://user-images.githubusercontent.com/17708702/60032160-a276e200-96c3-11e9-957c-81ea6045f93e.png',
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaURL = `${data.site.siteMetadata.url}${path}`
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              // Google meta tags
              {
                itemprop: 'name',
                content: title,
              },
              {
                itemprop: 'description',
                content: metaDescription,
              },
              {
                itemprop: 'image',
                content: coverPhoto,
              },
              // Facebook meta tags
              {
                property: 'og:url',
                content: metaURL,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:image',
                content: coverPhoto,
              },
              // Twitter meta tags
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : [],
              )
              .concat(
                meta.length > 0
                  ? {
                      name: 'keywords',
                      content: meta.join(', '),
                    }
                  : [],
              )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
      }
    }
  }
`
