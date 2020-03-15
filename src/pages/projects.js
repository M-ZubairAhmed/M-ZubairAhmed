import React from 'react'
import { graphql } from 'gatsby'

import App from '../app'
import { Jumbotron } from '../common/components'

const ProjectCard = ({
  id = '',
  title = '',
  description = '',
  tags = [],
  sourceCode = '',
  liveApp = '',
}) => (
  <div
    key={id}
    className="d-flex flex-md-row flex-column flex-nowrap justify-content-between p-3 mb-4 border border-secondary rounded rounded-lg">
    <div className="order-0 align-self-stretch mr-3">
      <h5 className="card-title text-decoration-none">{title}</h5>
      <h6 className="card-subtitle mb-2 text-decoration-none color-2">
        {description}
      </h6>
      <div className="pb-md-0 pb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-light font-weight-light font-italic mr-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="order-1 align-self-center d-flex flex-nowrap">
      <a
        href={sourceCode}
        role="button"
        className={`btn btn border border-secondary card-hover-effect ${
          liveApp ? 'mr-3' : ''
        }`}
        style={{ minWidth: '8rem' }}
        target="__blank">
        Source code
      </a>
      {liveApp && (
        <a
          href={liveApp}
          role="button"
          className="btn btn border border-secondary card-hover-effect "
          style={{ minWidth: '8rem' }}
          target="__blank">
          Live app
        </a>
      )}
    </div>
  </div>
)

export default ({ location, data }) => {
  const {
    allProjectsJson: { edges: projectsNode },
  } = data
  return (
    <App
      title="Projects"
      description="Building small projects helps me immensly in learning and understanding concepts."
      location={location}>
      <Jumbotron
        title="My Projects"
        description="Building small projects helps me immensly in learning and understanding concepts."
      />
      <section className="mb-5 px-3">
        {projectsNode.map((project) => (
          <ProjectCard key={project.node.id} {...project.node} />
        ))}
      </section>
    </App>
  )
}

export const pageQuery = graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          title
          description
          tags
          sourceCode
          liveApp
        }
      }
    }
  }
`
