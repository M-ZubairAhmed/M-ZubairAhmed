import React from 'react'
import { Link } from 'gatsby'
import App from '../app'

export default () => (
  <App>
    <div
      className=" container-fluid d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: '80vh' }}>
      <h1 className="display-4">Hey, i think you landed on a wrong page</h1>
      <Link to="/blog" className="nav-link text-secondary">
        <button type="button" className="btn btn-dark btn-lg btn-block">
          Redirect to my blog
        </button>
      </Link>
    </div>
  </App>
)
