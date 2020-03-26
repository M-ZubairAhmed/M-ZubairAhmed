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
          <h2 className="subtitle is-1">
            <Emoji symbol="🤹🏽‍♂️"></Emoji> Software Engineer
          </h2>
          <hr />
          <p className="subtitle is-4">
            I am working on <Emoji symbol="💻"></Emoji>frontend web development
            with Javascript and <Emoji symbol="📚"></Emoji>learning backend web
            development with GoLang. I love contributing to{' '}
            <Emoji symbol="🌟"></Emoji> open source.
            <br />
            <Emoji symbol="💗"></Emoji> Family is above everything else for me.
            My hobbies include <Emoji symbol="🚲"></Emoji>cycling,{' '}
            <Emoji symbol="🔨"> </Emoji>wood working,{' '}
            <Emoji symbol="🏏"></Emoji>
            cricket.
            <br />I often take <Emoji symbol="💼"></Emoji>client project on part
            time basis.
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
