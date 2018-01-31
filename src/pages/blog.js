import React from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'

import myBlogs from '../data/blogs'

import HTMLHead from '../components/head-tag'
import { Container, Card, Heading3Text } from '../utils/common-styles'
import BlogsCard from '../components/blogs-card'
import ScrollTop from '../components/scroll-top'
import HeaderMenu from '../components/header-menu'

export default () => (
  <Container>
    <HTMLHead
      title="Blog"
      description="Website where i share stuff i learn & work on with the rest of the world."
      image="https://en.gravatar.com/userimage/91254841/c8579ee1ac7aa6ddce02787fea02079e.jpg?size=200"
    />
    <HeaderMenu page="BLOG" />
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mt={[0, 2]} mb={[4, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        BLOG POSTS
      </Heading3Text>
      <Item.Group divided>
        {myBlogs.map(blog => <BlogsCard key={blog.repositoryName} {...blog} />)}
      </Item.Group>
      <ScrollTop />
    </Card>
  </Container>
)
