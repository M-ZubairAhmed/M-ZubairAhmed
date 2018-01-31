import React from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'

import myOpensource from '../data/opensource'
import { Container, Card, Heading3Text } from '../utils/common-styles'
import OpensourceCard from '../components/opensource-card'
import HTMLHead from '../components/head-tag'
import HeaderMenu from '../components/header-menu'
import ScrollTop from '../components/scroll-top'

export default () => (
  <Container>
    <HTMLHead
      title="OpenSource | Md-ZubairAhmed"
      description="Website where i share stuff i learn & work on with the rest of the world."
      image="https://en.gravatar.com/userimage/91254841/c8579ee1ac7aa6ddce02787fea02079e.jpg?size=200"
    />
    <HeaderMenu page="OPENSOURCE CONTRIBUTIONS" />
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mt={[0, 2]} mb={[4, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        OPEN SOURCES
      </Heading3Text>
      <Item.Group divided>
        {myOpensource.map(opensource => (
          <OpensourceCard key={opensource.repositoryName} {...opensource} />
        ))}
      </Item.Group>
      <ScrollTop />
    </Card>
  </Container>
)
