import React from 'react'
import App from '../app'

import { graphql } from 'gatsby'

const Hero = () => (
  <header className="px-3 py-5 text-center">
    <h1 className="display-3">Hi, I am M Zubair Ahmed</h1>
    <p className="lead">Software Engineer</p>
    <hr className="my-4" />
    <p className="lead">
      I am working on frontend web development with Javascript and learning
      backend web development with GoLang. I love contributing to open source.
      <br />
      Family is above everything else for me. My hobbies include cycling, wood
      working.
      <br />I often take up and work on client project on part time basis.
    </p>
  </header>
)

const Social = ({ allSocialsJson }) => {
  const { edges: socialsEdges } = allSocialsJson
  return (
    <footer className="py-5">
      <div className="d-flex justify-content-around flex-wrap">
        {socialsEdges.map(({ node: { id, name, link, username } }) => (
          <a
            key={id}
            className="btn btn border border-secondary mx-1 my-2 card-hover-effect "
            href={link}
            target="_blank"
            style={{ minWidth: '10rem' }}
            rel="noopener noreferrer">
            {name} : {username}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default ({ location, data }) => {
  return (
    <App
      title="Software Engineer"
      description="Personal website for M Zubair Ahmed"
      location={location}>
      <Hero />
      <Social allSocialsJson={data.allSocialsJson} />
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
