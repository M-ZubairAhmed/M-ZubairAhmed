import React from 'react'
import { Link } from 'gatsby'

import dp from '../../static/mydp.png'

export default () => (
  <nav>
    <ul className="nav align-items-center">
      <li className="nav-item">
        <Link to="/" className="nav-link text-secondary">
          <img
            src={dp}
            width="40"
            height="40"
            className="display-picture img-thumbnail"
            alt="Home"
          />
        </Link>
      </li>
      <li className="flex-grow-1" />
      <li className="nav-item">
        <Link to="/blog" className="nav-link text-secondary">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link text-secondary">
          Projects
        </Link>
      </li>
    </ul>
  </nav>
)
