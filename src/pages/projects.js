import React from 'react'
import Layout from '../templates/layout'

import Jumbotron from '../components/jumbotron'

export default ({ location }) => (
  <Layout
    title="Projects"
    description="List of my small projects helping me immensly in learning and understanding concepts."
    location={location}>
    <Jumbotron
      title="My Projects"
      description="List of my small projects helping me immensly in learning and understanding concepts."
    />
  </Layout>
)
