import React from 'react'
import Link from 'gatsby-link'

import { Divider } from 'semantic-ui-react'
import { Card, Heading2Text, Heading3Text, CenterVH } from '../utils/common-styles'
import HTMLHead from '../components/head-tag'

export default () => (
  <CenterVH>
    <HTMLHead
      title="404 | Md-ZubairAhmed"
      description="Website where i share stuff i learn & work on with the rest of the world."
      image="https://en.gravatar.com/userimage/91254841/c8579ee1ac7aa6ddce02787fea02079e.jpg?size=200"
    />
    <Card p={[1, 2, 3]} m={2}>
      <Heading2Text centerText mb={[2, 4]}>
        Sorry!<br />but I dont remember creating this page <br /> or <br /> there's a misspell in
        the link
      </Heading2Text>
      <Divider />
      <Link to="/">
        <Heading3Text centerText primary p={2}>
          BACK TO HOME
        </Heading3Text>
      </Link>
      <Link to="/blogs">
        <Heading3Text centerText primary p={2}>
          GO TO MY BLOG
        </Heading3Text>
      </Link>
      <Link to="/projects">
        <Heading3Text centerText primary p={2}>
          GO TO MY PROJECTS
        </Heading3Text>
      </Link>
      <Link to="/opensources">
        <Heading3Text centerText primary p={2}>
          GO TO MY OPENSOURCE CONTRIBUTIONS
        </Heading3Text>
      </Link>
    </Card>
  </CenterVH>
)
