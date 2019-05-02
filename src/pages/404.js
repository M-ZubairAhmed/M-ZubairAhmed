import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div
    className=" container-fluid d-flex flex-column justify-content-center align-items-center"
    style={{ minHeight: '100vh' }}>
    <h1 class="display-3">Page not Found</h1>
    <Link to="/blog" className="nav-link text-secondary">
      <button type="button" class="btn btn-dark btn-lg btn-block">
        Go to my blog
      </button>
    </Link>
  </div>
)
