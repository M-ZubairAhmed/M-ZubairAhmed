import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Item, Button, Image, Header } from 'semantic-ui-react'
import Card from '../components/card'
import styled from 'styled-components'

import Container from '../components/container'
import displayPic from '../data/avatar.jpeg'
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
import { JavascriptIcon, ReactIcon, GitIcon, WebpackIcon, BabelIcon } from '../utils/devIcons'
import ProjectCard from '../components/projects-card'
import myProjects from '../data/projects'
import { space, textAlign } from 'styled-system'

import { Flex, Box } from 'grid-styled'

const BioCard = styled(Card)`
  text-align: center;
`

const HeaderText = styled(Header)`
  color: #595976;
  font-weight: 900;
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

const SocialIcons = styled.a`
  margin-left: 30px;
  margin-right: 30px;
  color: #9b9b9b;
  :hover {
    color: #c7cad6;
  }
`

export default () => (
  <Container>
    <Box width={[1]}>
      <BioCard p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
        <Image rounded bordered size="small" centered src={displayPic} />
        <HeaderText as="h1" textAlign="center" color={'grey'}>
          Md Zubair Ahmed
        </HeaderText>
        <HeaderText as="h2" textAlign="center" disabled>
          Frontend Developer
        </HeaderText>
        <HeaderText as="h3" textAlign="center" disabled spaced>
          ahmedzubair216@gmail.com
        </HeaderText>
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
      </BioCard>
    </Box>
    <Box width={[1]}>
      <Card p={[1, 2, 3]} mt={[0, 2]} mb={[2, 3]}>
        <HeaderText as="h3" textAlign="center" italic color={'grey'}>
          A self taught developer with keen interest to keep exploring new technologies. An avid open source
          contributor. Have been developing web and mobile applications.
        </HeaderText>
        <Flex>
          <Box width={(1, 1 / 3)}>
            <HeaderText as="h4" textAlign="center" disabled color={'grey'} style={{ verticalAlign: 'center' }}>
              Skills
            </HeaderText>
          </Box>
          <Box width={(1, 2 / 3)}>
            <JavascriptIcon width={'50px'} height={'50px'} />
            <ReactIcon width={'50px'} height={'50px'} />
            <WebpackIcon width={'50px'} height={'55px'} />
            <BabelIcon width={'60px'} height={'55px'} />
            <GitIcon width={'50px'} height={'50px'} />
          </Box>
        </Flex>
      </Card>
    </Box>
    <Box width={[1]}>
      <div>
        <Card>
          <h3 style={{ width: '100%', color: '#c7cad6', fontWeight: '600' }}>Projects</h3>
          <Item.Group divided>{myProjects.map(project => <ProjectCard {...project} key={project.url} />)}</Item.Group>
          <Button basic fluid>
            View more
          </Button>
        </Card>
      </div>
    </Box>
  </Container>
)
