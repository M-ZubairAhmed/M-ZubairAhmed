import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav>
    <ul className="nav justify-content-end">
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
