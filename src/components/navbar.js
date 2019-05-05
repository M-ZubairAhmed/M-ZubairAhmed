import React from 'react'
import { Link } from 'gatsby'

import ThemeContext from '../context/ThemeContext'

export default class Navbar extends React.PureComponent {
  state = {
    isDarktheme: false,
  }

  render() {
    const pathname =
      this.props.location && this.props.location.pathname
        ? this.props.location.pathname
        : ''
    const paths = pathname.split('/').filter((url) => url)
    const basePage = paths && paths[0] ? paths[0] : ''

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <nav className="px-3">
            <ul className="nav align-items-end">
              <li className="nav-item mr-auto ">
                <Link
                  to="/"
                  className={`nav-link  ${
                    basePage === '' ? 'text-underline' : ''
                  }`}
                  title="Go back to Home">
                  &#8484;ubair
                </Link>
              </li>
              <li>
                <button
                  title="Toggle light and dark mode"
                  className={`nav-link theme-toggler btn btn-link no-text-color`}
                  data-toggle="button"
                  autoComplete="off"
                  onClick={theme.toggleDark}>
                  {theme.dark ? <>&#x2600; Light</> : <>&#x263D; Dark</>}
                </button>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link ${
                    basePage === 'blog' ? 'text-underline' : ''
                  }`}
                  title="Go to Blog">
                  {basePage === 'blog' ? <u>Blog</u> : <>Blog</>}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={`nav-link`}
                  title="Go to Projects">
                  {basePage === 'projects' ? <u>Projects</u> : <>Projects</>}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </ThemeContext.Consumer>
    )
  }
}
