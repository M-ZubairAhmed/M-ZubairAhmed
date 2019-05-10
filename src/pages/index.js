import React from 'react'
import App from '../app'
import { graphql } from 'gatsby'

import Hero from '../components/hero'
import Social from '../components/social'

export default ({ location, data }) => {
  const { allSocialsJson } = data
  return (
    <App
      title="A Software developer"
      description="Personal website for m-zubairahmed"
      location={location}>
      <Hero />
      <hr />
      <Social allSocialsJson={allSocialsJson} />
    </App>
  )
}

export const pageQuery = graphql`
  {
    allSocialsJson {
      edges {
        node {
          id
          name
          link
        }
      }
    }
  }
`
