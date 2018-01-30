import React from 'react'
import { Item, Image } from 'semantic-ui-react'
import { Flex, Box } from 'grid-styled'
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'

import myPicture from '../data/avatar.jpeg'
import myProjects from '../data/projects'
import myOpensource from '../data/opensource'

import { Container, Card, Heading1Text, Heading2Text, Heading3Text } from '../utils/common-styles'
import SocialIcons from '../components/social-icons'
import SkillIcons from '../components/skill-icons'
import ProjectCard from '../components/projects-card'
import OpensourceCard from '../components/opensource-card'

export default () => (
  <Container>
    <Card centerText p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Image rounded bordered size="small" centered src={myPicture} />
      <Heading1Text spaced>Md Zubair Ahmed</Heading1Text>
      <Heading2Text primary spaced>
        Frontend Developer
      </Heading2Text>
      <Heading2Text spaced>ahmedzubair216@gmail.com</Heading2Text>
      <SocialIcons />
    </Card>
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
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
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text mb={[2, 4]}>PROJECTS</Heading3Text>
      <Item.Group divided>
        {myProjects.slice(0, 3).map(project => <ProjectCard {...project} key={project.url} />)}
      </Item.Group>
      <Link to="/projects">
        <Heading3Text centerText>VIEW MORE</Heading3Text>
      </Link>
    </Card>
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text mb={[2, 4]}>OPEN SOURCE</Heading3Text>
      <Item.Group divided>
        {myOpensource
          .slice(0, 3)
          .map(opensource => <OpensourceCard key={opensource.repositoryName} {...opensource} />)}
      </Item.Group>
      <Link to="/opensource">
        <Heading3Text centerText>VIEW MORE</Heading3Text>
      </Link>
    </Card>
  </Container>
)
