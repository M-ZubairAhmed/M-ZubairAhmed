import React from 'react'
import { Link } from 'gatsby'

import App from '../app'

export default () => (
  <App>
    <section className="hero is-medium has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
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
