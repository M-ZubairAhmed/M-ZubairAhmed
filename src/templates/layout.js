import React from 'react'
import PropTypes from 'prop-types'
import { mainSiteTags } from '../utils/constants'

import ThemeContext from '../context/ThemeContext'
import SEO from '../components/seo'
import Navbar from '../components/navbar'

import '../styles/index.scss'
// import '../styles/bootstrap.css'

const Layout = (props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={`container-section ${theme.dark ? 'dark' : 'light'}`}>
          <main>
            <SEO
              title={props.title}
              keywords={mainSiteTags}
              description={props.description}
              meta={props.meta}
            />
            <Navbar location={props.location} />
            <div className="px-3 py-5">{props.children}</div>
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
