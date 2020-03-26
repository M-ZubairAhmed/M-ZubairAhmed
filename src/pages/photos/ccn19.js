import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import App from '../../app'
import { Jumbotron } from '../../common/components'

export default ({ location, data }) => {
  const {
    allImageSharp: { nodes: photosNode },
  } = data

  return (
    <App
      title="My Photos"
      description="Some clicks and flicks."
      location={location}>
      <Jumbotron
        title="Photos"
        description="Modern ways of end to end testing with cypress at Vue Hyderabad Feb 2020"
      />
      <section className="container">
        {photosNode.map(({ fluid }) => (
          <div className="mb-3">
            <Img fluid={fluid} />
          </div>
        ))}
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  {
    allImageSharp(filter: { original: { src: { regex: "/ccn19/" } } }) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
