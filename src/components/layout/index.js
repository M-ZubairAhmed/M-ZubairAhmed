import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../Seo'
import Navbar from '../navbar'

import '../../styles/bootstrap/bootstrap.min.css'
import '../../styles/fontawesome/css/all.min.css'
import '../../styles/appStyles/appStyles.css'

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
      <>
        <SEO title="M-Zubair Ahmed" keywords={tags} />
        <Navbar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px`,
            paddingTop: 0,
          }}>
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
