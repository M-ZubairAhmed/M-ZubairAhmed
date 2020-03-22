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
  <div class="card mb-3">
    <div class="card-content">
      <h3 class="title is-4">{title}</h3>
      <p class="subtitle is-6">{description}</p>
      <p class="subtitle">
        <div class="tags">
          <nav
            class="breadcrumb is-small has-bullet-separator"
            aria-label="breadcrumbs">
            <ul>
              {tags.map((tag) => (
                <>
                  <li key={tag}>
                    &nbsp;&nbsp;
                    {tag}
                    &nbsp;&nbsp;
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <a
            href={sourceCode}
            role="button"
            className={`btn btn border border-secondary ${
              liveApp ? 'mr-3' : ''
            }`}
            style={{ minWidth: '8rem' }}
            target="__blank">
            Source code
          </a>
        </span>
      </p>
      {liveApp && (
        <p class="card-footer-item">
          <span>
            <a
              href={liveApp}
              role="button"
              className="btn btn border border-secondary "
              style={{ minWidth: '8rem' }}
              target="__blank">
              Live app
            </a>
          </span>
        </p>
      )}
    </footer>
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
      <div className="container">
        {projectsNode.map((project) => (
          <ProjectCard key={project.node.id} {...project.node} />
        ))}
      </div>
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
