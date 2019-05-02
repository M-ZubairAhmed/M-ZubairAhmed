import React from 'react'
import { Row, Col } from 'react-bootstrap'

const socialData = [
  {
    link: 'https://github.com/M-ZubairAhmed/',
    icon: 'fab fa-github',
  },
  {
    link: 'https://twitter.com/Md_ZubairAhmed/',
    icon: 'fab fa-twitter',
  },
  {
    link: 'https://www.linkedin.com/in/md-zubairahmed/',
    icon: 'fab fa-linkedin',
  },
  {
    link: 'https://angel.co/m-zubair-ahmed/',
    icon: 'fab fa-angellist',
  },
  {
    link: 'mailto:m-zubairahmed@protonmail.com',
    icon: 'far fa-envelope',
  },
]

export default () => (
  <Row className="jumbo_social text-center">
    {socialData.map((social) => (
      <Col>
        <a
          style={{ color: '#000' }}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer">
          <i className={`${social.icon} hover_effect`} />
        </a>
      </Col>
    ))}
  </Row>
)
