import React from 'react'
import { graphql, Link } from 'gatsby'

import App from '../app'
import { Jumbotron } from '../common/components'

const PhotosCard = ({ name = '', link = '', count = '' }) => (
  <div className="card mb-3">
    <div className="card-content">
      <h3 className="title is-4">{name}</h3>
      <div className="content">
        <p>{parseInt(count) === 1 ? `1 photo` : `${parseInt(count)} photos`}</p>
      </div>
    </div>
    <div className="card-footer">
      <Link to={link} className="card-footer-item">
        View
      </Link>
    </div>
  </div>
)

export default ({ location, data }) => {
  const {
    allPhotosJson: { nodes: photosNode },
  } = data

  return (
    <App
      title="My Photos"
      description="Some clicks and flicks."
      location={location}>
      <Jumbotron title="My Photos" description="Some clicks and flicks." />
      <section className="container">
        {photosNode.map((project) => (
          <PhotosCard key={project.id} {...project} />
        ))}
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  {
    allPhotosJson {
      nodes {
        id
        name
        count
        link
      }
    }
  }
`
