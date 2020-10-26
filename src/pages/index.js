import React from 'react'
import App from '../app'

import { graphql } from 'gatsby'
import { Emoji } from '../common/components'

export default ({ location, data }) => {
  const {
    allSocialsJson: { edges: socialsEdges },
  } = data

  return (
    <App
      title="Software Engineer"
      description="Personal website for M Zubair Ahmed"
      location={location}>
      <section className="hero has-text-centered">
        <div className="hero-body">
          <h1 className="title is-1">Hi, I am M. Zubair Ahmed</h1>
          <br />
          <h2 className="subtitle is-1">
            <Emoji symbol="🤹🏽‍♂️"></Emoji> Software Engineer |{' '}
            <Emoji symbol="🧩"></Emoji>Open Source Contributor
          </h2>
          <hr />
          <p className="subtitle is-4">
            I am a self taught Software Engineer. Currently working as a full
            time remote <Emoji symbol="💻"></Emoji> Frontend Web developer and
            an aspiring <Emoji symbol="🤖"></Emoji> Machine learning Engineer.
            <br />
          </p>
        </div>
        <div className="hero-foot">
          <div className="buttons is-centered">
            {socialsEdges.map(({ node: { id, name, link, username } }) => (
              <a
                key={id}
                className="button"
                href={link}
                target="_blank"
                style={{ minWidth: '10rem' }}
                rel="noopener noreferrer">
                {name} : {username}
              </a>
            ))}
          </div>
        </div>
      </section>
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
          username
        }
      }
    }
  }
`
