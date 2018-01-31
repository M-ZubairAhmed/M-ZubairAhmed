import React from 'react'
import Link from 'gatsby-link'
import { Item } from 'semantic-ui-react'

import { Container, Card, Heading3Text } from '../utils/common-styles'
import ProjectCard from '../components/projects-card'
import myProjects from '../data/projects'
import HTMLHead from '../components/head-tag'

export default () => (
  <Container>
    <HTMLHead
      title="Projects | Md-ZubairAhmed"
      description="Website where i share stuff i learn & work on with the rest of the world."
    />
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text primary mb={[2, 4]}>
        PROJECTS
      </Heading3Text>
      <Item.Group divided>
        {myProjects.map(project => <ProjectCard {...project} key={project.url} />)}
      </Item.Group>
      <Link to="/">
        <Heading3Text centerText>BACK TO HOME</Heading3Text>
      </Link>
    </Card>
  </Container>
)
