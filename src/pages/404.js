import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div
    className=" container-fluid d-flex flex-column justify-content-center align-items-center"
    style={{ minHeight: '100vh' }}>
    <h1 className="display-3">Page not Found</h1>
    <Link to="/blog" className="nav-link text-secondary">
      <button type="button" className="btn btn-dark btn-lg btn-block">
        Go to my blog
      </button>
    </Link>
  </div>
)
