import React from 'react'
import { Link } from 'gatsby'

export default ({ location }) => {
  const pathname = location && location.pathname ? location.pathname : ''
  const paths = pathname.split('/').filter((url) => url)
  const basePage = paths && paths[0] ? paths[0] : ''

  return (
    <nav>
      <ul className="nav align-items-top">
        <li className="nav-item mr-auto ">
          <Link
            to="/"
            className={`nav-link  ${
              basePage === '' ? 'text-dark' : 'text-black-50'
            }`}>
            &#9776;
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={`nav-link ${
              basePage === 'blog' ? 'text-dark' : 'text-black-50'
            }`}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={`nav-link ${
              basePage === 'projects' ? 'text-dark' : 'text-black-50'
            }`}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}
