import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../seo'
import Navbar from '../navbar'

import '../../styles/index.scss'

const tags = [
  `software developer`,
  `Frontend Developer`,
  `Javascript`,
  `react`,
  `Portfolio Site`,
  `Golang`,
  `Hyderabad`,
  'India',
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <main className="container">
        <SEO title="M-Zubair Ahmed" keywords={tags} lang="en" description="Software developer"/>
        <Navbar />
        <section>{children}</section>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
