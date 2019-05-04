import React from 'react'
import Layout from '../templates/layout'

import Hero from '../components/hero'
import Social from '../components/social'

export default ({ location }) => {
  return (
    <Layout
      title="A Software developer"
      description="Personal website for m-zubairahmed"
      location={location}>
      <Hero />
      <hr />
      <Social />
    </Layout>
  )
}
