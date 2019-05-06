import React from 'react'
import App from '../app'

import Jumbotron from '../components/jumbotron'

import { projectsData } from '../utils/constants'

const ProjectCard = ({
  title = '',
  description = '',
  tags = [],
  sourceCode = '',
  liveApp = '',
}) => (
  <div class="card mb-3">
    <div class="card-body d-flex flex-md-row flex-column flex-nowrap justify-content-between">
      <div className="order-0 align-self-stretch mr-3">
        <h5 class="card-title text-dark text-decoration-none">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
          {description}
        </h6>
        <div className="pb-md-0 pb-3">
          {tags.map((tag) => (
            <span class="badge badge-light font-weight-light font-italic mr-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="order-1 align-self-center d-flex flex-nowrap">
        <a
          href={sourceCode}
          role="button"
          className={`btn btn-outline-secondary ${liveApp ? 'mr-3' : ''}`}
          style={{ minWidth: '8rem' }}
          target="__blank">
          Source code
        </a>
        {liveApp && (
          <a
            href={liveApp}
            role="button"
            className="btn btn-secondary"
            style={{ minWidth: '8rem' }}
            target="__blank">
            Live app
          </a>
        )}
      </div>
    </div>
  </div>
)

export default ({ location }) => (
  <App
    title="Projects"
    description="Building small projects helps me immensly in learning and understanding concepts."
    location={location}>
    <Jumbotron
      title="My Projects"
      description="Building small projects helps me immensly in learning and understanding concepts."
    />
    <section className="mb-7 px-3">
      {projectsData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </section>
  </App>
)
