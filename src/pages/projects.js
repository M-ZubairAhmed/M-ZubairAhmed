import React from 'react'
import Link from 'gatsby-link'
import { Item, Button, Icon } from 'semantic-ui-react'

import { Container, Card, Heading3Text } from '../utils/common-styles'
import ProjectCard from '../components/projects-card'
import myProjects from '../data/projects'
import HTMLHead from '../components/head-tag'
import ScrollTop from '../components/scroll-top'
import HeaderMenu from '../components/header-menu'

export default () => (
  <Container>
    <HTMLHead
      title="Projects | Md-ZubairAhmed"
      description="Website where i share stuff i learn & work on with the rest of the world."
      image="https://en.gravatar.com/userimage/91254841/c8579ee1ac7aa6ddce02787fea02079e.jpg?size=200"
    />
    <HeaderMenu page="PROJECT WORKS" />
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mt={[0, 2]} mb={[4, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        PROJECTS
      </Heading3Text>
      <Item.Group divided>
        {myProjects.map(project => <ProjectCard {...project} key={project.url} />)}
      </Item.Group>
      <ScrollTop />
    </Card>
  </Container>
)
