import React from 'react'
import { Item } from 'semantic-ui-react'
import Link from 'gatsby-link'

import myOpensource from '../data/opensource'
import { Container, Card, Heading3Text } from '../utils/common-styles'
import OpensourceCard from '../components/opensource-card'

export default () => (
  <Container>
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        OPEN SOURCES
      </Heading3Text>
      <Item.Group divided>
        {myOpensource.map(opensource => (
          <OpensourceCard key={opensource.repositoryName} {...opensource} />
        ))}
      </Item.Group>
      <Link to="/">
        <Heading3Text centerText>BACK TO HOME</Heading3Text>
      </Link>
    </Card>
  </Container>
)
