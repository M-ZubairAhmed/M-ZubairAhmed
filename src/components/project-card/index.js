import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ProjectCard = (props) => {
  return (
    <div className="project_container">
      <Row>
        <Col>
          <img
            src={props.imageSrcPath}
            alt={'project specific logo'}
            style={{ maxWidth: '100%' }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <div>
            <h4>
              {props.title}
              <br />
            </h4>
            <p>{props.description}</p>
            <p className="font-italic">{props.tech}</p>
          </div>
          <Row>
            <Col sm={6}>
              <Button href={props.sourceURL} variant="outline-secondary">
                Check out Source code
              </Button>
            </Col>
            <Col sm={6} className="text-right">
              <Button variant="secondary">Go to Hosted app</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
