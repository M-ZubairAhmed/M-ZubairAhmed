import React from 'react'
import { graphql } from 'gatsby'

import App from '../app'
import { Jumbotron } from '../common/components'

const ProjectCard = ({
  title = '',
  description = '',
  tags = [],
  sourceCode = '',
  liveApp = '',
}) => (
  <div className="card mb-3">
    <div className="card-content">
      <h3 className="title is-4">{title}</h3>
      <div className="content">
        <p>{description}</p>
        <div className="breadcrumb is-small has-bullet-separator">
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                &nbsp;&nbsp;
                {tag}
                &nbsp;&nbsp;
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <a
        href={sourceCode}
        className="card-footer-item"
        target="__blank"
        rel="noreferrer noopener">
        Source code
      </a>
      {liveApp && (
        <a
          href={liveApp}
          className="card-footer-item"
          target="__blank"
          rel="noreferrer noopener">
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
      description="Building small projects helps me in learning and understanding concepts."
      location={location}>
      <Jumbotron
        title="My Projects"
        description="Building small projects helps me in learning and understanding concepts."
      />
      <section className="container">
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
