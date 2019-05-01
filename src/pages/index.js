import React from "react"
import Layout from "../components/layout"

import Hero from "../components/hero"
import Social from '../components/social'

export default () => (
  <div className="App">
    <Layout>
      <Hero />
      <Social/>
    </Layout>
  </div>
)
