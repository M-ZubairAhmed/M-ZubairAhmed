import React from 'react'
import App from '../app'

const Hero = () => (
  <header className="px-3 py-5 text-center">
    <h1 className="display-3">Hi, I am M Zubair Ahmed</h1>
    <p className="lead">A Software developer</p>
    <hr className="my-4" />
    <p className="lead">
      I am working on frontend web development with Javascript and learning
      backend web development with GoLang. I love contributing to open source.
      <br />
      Family is above everything else for me. My hobbies include cycling, wood
      working.
      <br />I often take up and work on client project on part time basis.
    </p>
  </header>
)

export default ({ location }) => {
  return (
    <App
      title="A Software developer"
      description="Personal website for M Zubair Ahmed"
      location={location}>
      <Hero />
    </App>
  )
}
