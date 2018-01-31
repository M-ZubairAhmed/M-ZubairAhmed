import React from 'react'
import { Item } from 'semantic-ui-react'
import Link from 'gatsby-link'

import myOpensourcesData from '../data/opensource'

import { Container, Card, Heading3Text } from '../utils/common-styles'
import OpensourceCard from '../components/opensource-card'
import BlogsCard from '../components/blogs-card'
import HTMLHead from '../components/head-tag'

export default () => (
  <Container>
    <HTMLHead
      title="Blog | Md-ZubairAhmed"
      description="Website where i share stuff i learn & work on with the rest of the world."
    />
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        BLOG POSTS
      </Heading3Text>
      <Item.Group divided>
        {myOpensourcesData.map(opensource => (
          <BlogsCard key={opensource.repositoryName} {...opensource} />
        ))}
      </Item.Group>
      <Link to="/">
        <Heading3Text centerText>BACK TO HOME</Heading3Text>
      </Link>
    </Card>
  </Container>
)
