import React from 'react'
import { Link } from 'gatsby'

import App from '../app'

export default () => (
  <App>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hey, i think you landed on a wrong page,
            <br />
            This page doesn't exists.
          </h1>
          <Link to="/">
            <button type="button" className="button">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </section>
  </App>
)
