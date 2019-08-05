import React from 'react'
import App from '../app'

export default ({ location }) => {
  return (
    <App
      title="A Software developer"
      description="Personal website for m-zubairahmed"
      location={location}>
      <Hero />
    </App>
  )
}

const Hero = () => (
  <header className="px-3 py-5 text-center">
    <h1 className="display-3">Hi, I am M.Zubair Ahmed</h1>
    <p className="lead">A Software developer</p>
    <hr className="my-4" />
    <p className="lead">
      Currently i am working on frontend web development with Javascript and
      learning backend web development with GoLang.
    </p>
  </header>
)
