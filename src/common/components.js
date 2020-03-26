import React, { useState } from 'react'
import { Link } from 'gatsby'

import ThemeContext from './themeContext'

export const Jumbotron = (props) => (
  <header className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">{props.title}</h1>
        <h2 className="subtitle is-4">{props.description}</h2>
      </div>
    </div>
  </header>
)

export const Navbar = ({ location }) => {
  const pathname = location && location.pathname ? location.pathname : ''
  const paths = pathname.split('/').filter((url) => url)
  const basePage = paths && paths[0] ? paths[0] : ''
  const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false)

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main navigation">
          <div className="navbar-item">
            <Link to="/" title="Go back to Home">
              {basePage === '' ? <u>M-ZubairAhmed</u> : <>M-ZubairAhmed</>}
            </Link>
            <a
              href="/"
              role="button"
              className={`navbar-burger burger ${
                isBurgerMenuOpen ? 'is-active' : ''
              }`}
              aria-label="menu"
              aria-expanded="false"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                toggleBurgerMenu(!isBurgerMenuOpen)
              }}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${isBurgerMenuOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              {/* <div className="navbar-item">
                <a
                  title="Toggle light and dark mode"
                  data-toggle="button"
                  onClick={theme.toggleDark}>
                  {theme.isDarkMode ? 'Go bright' : 'Go dark'}
                </a>
              </div> */}
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/blog" title="Go to Blog">
                  {basePage === 'blog' ? <u>Blog</u> : <>Blog</>}
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/talks" title="Go to Talks">
                  {basePage === 'talks' ? <u>Talks</u> : <>Talks</>}
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/projects" title="Go to Projects">
                  {basePage === 'projects' ? <u>Projects</u> : <>Projects</>}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  )
}

export const Emoji = ({ symbol, ...rest }) => (
  <span role="img" aria-label="" aria-hidden="true" {...rest}>
    {symbol}
  </span>
)

export const formatDate = (date = '1990-1-1') =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

export const EOT = () => (
  <>
    <Link to="/talks">
      <h1 className="title is-size-1 has-text-warning">&#x2715;</h1>
    </Link>
    <h6>EOT : End of Tape</h6>
  </>
)
