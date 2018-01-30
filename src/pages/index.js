import React from 'react'
import { Item, Button, Image, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import displayPic from '../data/avatar.jpeg'
import myProjects from '../data/projects'
import 'semantic-ui-css/semantic.min.css'

import { JavascriptIcon, ReactIcon, GitIcon, WebpackIcon, BabelIcon } from '../utils/devIcons'
import {
  githubLink,
  linkedinLink,
  stackoverflowLink,
  skypeLink,
  twitterLink,
  youtubeLink,
  mediumLink,
} from '../data/socialLinks'
import Github from 'react-icons/lib/go/mark-github'
import Linkedin from 'react-icons/lib/ti/social-linkedin'
import Twitter from 'react-icons/lib/ti/social-twitter'
import Youtube from 'react-icons/lib/ti/social-youtube'
import Medium from 'react-icons/lib/fa/medium'
import Stackoverflow from 'react-icons/lib/fa/stack-overflow'
import Skype from 'react-icons/lib/fa/skype'
import ProjectCard from '../components/projects-card'
import { Container, Card, Heading1Text, Heading2Text, Heading3Text } from '../utils/common-styles'

const TypeText = styled(Header)`
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
  font-style: ${props => (props.italicized ? 'italic' : 'normal')};
`

const SocialIcons = styled.a`
  margin-left: 30px;
  margin-right: 30px;
  color: #bfbfbf;
  :hover {
    color: #e5e5e5;
  }
`

export default () => (
  <Container>
    <Card centerText p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Image rounded bordered size="small" centered src={displayPic} />
      <Heading1Text spaced>Md Zubair Ahmed</Heading1Text>
      <Heading2Text primary spaced>
        Frontend Developer
      </Heading2Text>
      <Heading2Text spaced>ahmedzubair216@gmail.com</Heading2Text>
      <Box mt={[1, 2, 3]}>
        <SocialIcons target="_blank" href={linkedinLink}>
          <Linkedin width="50px" height="50px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={twitterLink}>
          <Twitter width="45px" height="45px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={youtubeLink}>
          <Youtube width="46px" height="52px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={githubLink}>
          <Github width="35px" height="35px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={mediumLink}>
          <Medium width="38px" height="38px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={stackoverflowLink}>
          <Stackoverflow width="28px" height="28px" />
        </SocialIcons>
        <SocialIcons target="_blank" href={skypeLink}>
          <Skype width="34px" height="34px" />
        </SocialIcons>
      </Box>
    </Card>
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text primary centerText>
        A self taught developer with keen interest to keep exploring new technologies. An avid open source contributor.
        Have been developing web and mobile applications.
      </Heading3Text>
      <Flex direction={['column', 'row']}>
        <Box width={(1, 1 / 5)}>
          <Heading3Text mb={[2, 4]}>Skills</Heading3Text>
        </Box>
        <Box width={(1, 4 / 5)} m={'0 auto'}>
          <JavascriptIcon width={'50px'} height={'50px'} />
          <ReactIcon width={'50px'} height={'50px'} />
          <WebpackIcon width={'50px'} height={'55px'} />
          <BabelIcon width={'60px'} height={'55px'} />
          <GitIcon width={'50px'} height={'50px'} />
        </Box>
      </Flex>
    </Card>
    <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
      <Heading3Text mb={[2, 4]}>Projects</Heading3Text>
      <Item.Group divided>{myProjects.map(project => <ProjectCard {...project} key={project.url} />)}</Item.Group>
      <Button basic fluid>
        View more
      </Button>
    </Card>
  </Container>
)
