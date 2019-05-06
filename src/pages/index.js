import React from 'react'
import App from '../app'

import Hero from '../components/hero'
import Social from '../components/social'

export default ({ location }) => {
  return (
    <App
      title="A Software developer"
      description="Personal website for m-zubairahmed"
      location={location}>
      <Hero />
      <hr />
      <Social />
    </App>
  )
}
