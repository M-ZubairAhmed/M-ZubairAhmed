import React from 'react'
import { Row, Col, Card } from 'elemental'
import '../utils/elemental.css'

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

const socialLinkStyles = {
  marginLeft: '30px',
  marginRight: '30px',
  color: '#313443',
}

export default () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '1024px',
      color: '#fff',
    }}
  >
    <Row>
      <Col md="1" lg="1">
        <Card
          style={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <img
            style={{
              borderRadius: '5px',
              margin: '20px',
              maxWidth: '150px',
              maxHeight: '150px',
            }}
            src={displayPic}
          />
          <h1 style={{ paddingTop: '20px' }}>M Zubair Ahmed</h1>
          <h3 style={{ padding: '20px' }}>ahmedzubair216@gmail.com</h3>
          <a style={socialLinkStyles} target="_blank" href={linkedinLink}>
            <Linkedin width="50px" height="50px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={twitterLink}>
            <Twitter width="45px" height="45px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={youtubeLink}>
            <Youtube width="46px" height="52px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={githubLink}>
            <Github width="35px" height="35px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={mediumLink}>
            <Medium width="38px" height="38px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={stackoverflowLink}>
            <Stackoverflow width="28px" height="28px" />
          </a>
          <a style={socialLinkStyles} target="_blank" href={skypeLink}>
            <Skype width="34px" height="34px" />
          </a>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <Row>
            <Col style={{ margin: '0 auto', marginBottom: '30px', marginTop: '30px' }} lg="90%">
              <h3 style={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '30px', fontWeight: '550' }}>
                A self taught developer with keen interest to keep exploring new technologies. An avid open source
                contributor. Have been developing web and mobile applications.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col
              lg="1/4"
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h4 style={{ width: '100%' }}>Skills</h4>
            </Col>
            <Col lg="3/4" style={{ margin: '0 auto' }}>
              <JavascriptIcon width={'50px'} height={'50px'} />
              <ReactIcon width={'50px'} height={'50px'} />
              <WebpackIcon width={'50px'} height={'55px'} />
              <BabelIcon width={'60px'} height={'55px'} />
              <GitIcon width={'50px'} height={'50px'} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
)
