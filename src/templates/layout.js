import React from 'react'
import PropTypes from 'prop-types'
import { mainSiteTags } from '../utils/constants'

import SEO from '../components/seo'
import Navbar from '../components/navbar'

import '../styles/index.scss'
// import '../styles/bootstrap.css'

const Layout = (props) => {
  return (
    <main className="container">
      <SEO
        title={props.title}
        keywords={mainSiteTags}
        description={props.description}
        meta={props.meta}
      />
      <Navbar location={props.location}/>
      <section>{props.children}</section>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
