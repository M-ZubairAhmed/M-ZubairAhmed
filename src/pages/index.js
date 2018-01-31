import React from 'react'
import { Item, Image, Button, Icon } from 'semantic-ui-react'
import { Flex, Box } from 'grid-styled'
import Link from 'gatsby-link'

import myPicture from '../data/avatar.jpeg'
import myProjects from '../data/projects'
import myOpensource from '../data/opensource'
import myBlogs from '../data/blogs'

import { Container, Card, Heading1Text, Heading2Text, Heading3Text } from '../utils/common-styles'
import SocialIcons from '../components/social-icons'
import SkillIcons from '../components/skill-icons'
import ProjectCard from '../components/projects-card'
import OpensourceCard from '../components/opensource-card'
import BlogsCard from '../components/blogs-card'
import HTMLHead from '../components/head-tag'

export default () => (
  <Container>
    <HTMLHead
      title="Md-ZubairAhmed's"
      description="Website where i share stuff i learn & work on with the rest of the world."
      image="https://en.gravatar.com/userimage/91254841/c8579ee1ac7aa6ddce02787fea02079e.jpg?size=200"
    />
    <Card centerText px={[2, 3]} pt={[2, 3]} pb={4} mt={[0, 2]} mb={[4, 3]}>
      <Image rounded bordered size="small" centered src={myPicture} />
      <Heading1Text spaced>Md Zubair Ahmed</Heading1Text>
      <Heading2Text primary spaced>
        Frontend Developer
      </Heading2Text>
      <Heading2Text spaced>ahmedzubair216@gmail.com</Heading2Text>
      <SocialIcons />
    </Card>
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mb={[4, 3]}>
      <Heading3Text primary centerText>
        A self taught developer with keen interest to keep exploring new technologies. An avid open
        source contributor. Have been developing web and mobile applications.
      </Heading3Text>
      <Flex direction={['column', 'row']}>
        <Box width={(1, 1 / 5)}>
          <Heading3Text mb={[2, 4]}>SKILLS</Heading3Text>
        </Box>
        <Box width={(1, 4 / 5)} m={'0 auto'}>
          <SkillIcons />
        </Box>
      </Flex>
    </Card>
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mb={[4, 3]}>
      <Heading3Text mb={[2, 4]}>PROJECTS</Heading3Text>
      <Item.Group divided>
        {myProjects.slice(0, 3).map(project => <ProjectCard {...project} key={project.url} />)}
      </Item.Group>
      <Link to="/projects">
        <Button basic size="mini" floated="right">
          VIEW MORE
          <Icon disabled name="arrow right" />
        </Button>
      </Link>
    </Card>
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mb={[4, 3]}>
      <Heading3Text mb={[2, 4]}>OPEN SOURCES</Heading3Text>
      <Item.Group divided>
        {myOpensource
          .slice(0, 3)
          .map(opensource => <OpensourceCard key={opensource.repositoryName} {...opensource} />)}
      </Item.Group>
      <Link to="/opensources">
        <Button basic size="mini" floated="right">
          VIEW MORE
          <Icon disabled name="arrow right" />
        </Button>
      </Link>
    </Card>
    <Card px={[2, 3]} pt={[2, 3]} pb={4} mb={[4, 3]}>
      <Heading3Text mb={[2, 4]}>BLOG POSTS</Heading3Text>
      <Item.Group divided>
        {myBlogs.slice(0, 3).map(blog => <BlogsCard key={blog.title} {...blog} />)}
      </Item.Group>
      <Link to="/blog">
        <Button basic size="mini" floated="right">
          VIEW MORE
          <Icon disabled name="arrow right" />
        </Button>
      </Link>
    </Card>
  </Container>
)
