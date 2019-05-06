import React from 'react'
import App from '../app'

import Jumbotron from '../components/jumbotron'

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
      <div class="card mb-3 card-hover-effect">
        <div class="card-body">
          <h5 class="card-title text-dark text-decoration-none">
            Coming soon...
          </h5>
          <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
            ish
          </h6>
        </div>
      </div>
    </section>
  </App>
)
