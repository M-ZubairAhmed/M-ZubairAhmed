import React from 'react'
import App from '../app'
import { graphql } from 'gatsby'

import { Jumbotron } from '../common/components'

export default ({ location, data }) => {
  const { allSocialsJson } = data
  return (
    <App
      title="Contact me"
      description="My twitter DMs are open"
      location={location}>
      <section className="mb-5 px-3">
        <Jumbotron
          title="Want to say Hi?"
          description="Drop me a line on twitter, my DMs are open"
        />
        <Social allSocialsJson={allSocialsJson} />
      </section>
    </App>
  )
}

const Social = ({ allSocialsJson }) => {
  const { edges: socialsEdges } = allSocialsJson
  return (
    <footer className="py-5">
      <div className="d-flex justify-content-around flex-wrap">
        {socialsEdges.map(({ node: { id, name, link } }) => (
          <a
            key={id}
            className="btn btn border border-secondary mx-1 my-2 card-hover-effect "
            href={link}
            target="_blank"
            style={{ minWidth: '10rem' }}
            rel="noopener noreferrer">
            {name}
          </a>
        ))}
      </div>
    </footer>
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
