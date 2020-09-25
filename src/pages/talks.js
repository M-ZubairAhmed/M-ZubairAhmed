import React from 'react'
import App from '../app'
import { Link, graphql } from 'gatsby'

import { Jumbotron, formatDate } from '../common/components'

const TalkCard = ({
  name = '',
  date,
  host = '',
  link = '',
  photos = '',
  slides = '',
  video = '',
}) => (
  <div className="card mb-3">
    <div className="card-content">
      <h3 className="title is-4">{name}</h3>
      <div className="content">
        <p>{host}</p>
        <p>{formatDate(date)}</p>
      </div>
    </div>
    <div className="card-footer">
      {link && (
        <a
          href={link}
          className="card-footer-item"
          target="__blank"
          rel="noreferrer noopener">
          Link
        </a>
      )}
      {video && (
        <a
          href={video}
          className="card-footer-item"
          target="__blank"
          rel="noreferrer noopener">
          Video
        </a>
      )}
      {photos && (
        <Link
          to={photos}
          className="card-footer-item"
          target="__blank"
          rel="noreferrer noopener">
          Photos
        </Link>
      )}
      {slides && (
        <Link to={slides} className="card-footer-item">
          Slides
        </Link>
      )}
    </div>
  </div>
)

export default (props) => {
  const {
    data: {
      allTalksJson: { nodes: talks },
    },
  } = props

  return (
    <App
      title="My Talks"
      description="I try to get engaged with the community by talks, meetups, discussions."
      location={props.location}>
      <Jumbotron
        title="My Talks"
        description="I try to get engaged with the community by talks, meetups, discussions."
      />
      <section className="container">
        {talks.map((talk) => (
          <TalkCard key={talk.id} {...talk} />
        ))}
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  {
    allTalksJson {
      nodes {
        id
        name
        host
        date
        link
        photos
        slides
        video
      }
    }
  }
`
