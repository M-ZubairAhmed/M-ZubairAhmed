import React from 'react'
import { graphql } from 'gatsby'

export default ({ allSocialsJson }) => {
  const { edges: socialsEdges } = allSocialsJson
  return (
    <footer className="p-4">
      <h5 className="pb-3">I can be found on :</h5>
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
