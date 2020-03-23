import React from 'react'

import ThemeContext from './context/ThemeContext'
import SEO from './common/seo'
import { Navbar } from './common/components'

const mainSiteTags = [
  `Software developer`,
  `Frontend Developer`,
  `Javascript`,
  `ReactJS`,
  `Portfolio Site`,
  `Golang`,
  `Hyderabad`,
  'India',
]

export default (props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={`${theme.isDarkMode ? 'dark' : 'light'}`}>
          <main>
            <SEO
              title={props.title}
              keywords={mainSiteTags}
              description={props.description}
              meta={props.meta}
              coverPhoto={props.coverPhoto}
              path={props.path}
              lang="en"
            />
            <Navbar location={props.location} />
            <div className="section">{props.children}</div>
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
