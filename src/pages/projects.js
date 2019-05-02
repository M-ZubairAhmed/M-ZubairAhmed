import React from 'react'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'

import Jumbotron from '../components/jumbotron'
import ProjectCard from '../components/project-card'

const projects = [
  {
    title: 'Cool React app',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.',
    imageURL:
      'https://user-images.githubusercontent.com/17708702/56468550-e04d5500-644b-11e9-80fb-6e091d0ef1cd.png',
    sourceURL: 'https://github.com',
    hostedURL: 'http://www.google.com',
    tech: 'ReactJS, NodeJS, Mongoose',
  },
  {
    title: 'Project 2 title',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.',
    sourceURL: 'https://github.com/',
    hostedURL: 'https://www.google.com',
  },
  {
    title: 'Project 3 title',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.',
    sourceURL: 'https://github.com/',
    hostedURL: 'https://www.google.com',
  },
]

export default () => (
  <div className="App">
    <Layout>
      <Jumbotron
        title={'Projects Portfolio'}
        body={'I think the best way of learning is by building Stuff.'}
      />
      <hr />
      <Container style={{ marginTop: '2.5rem' }}>
        {projects.map((project) => (
          <Row key="project.sourceURL">
            <Col>
              <ProjectCard
                imageSrcPath={project.imageURL}
                title={project.title}
                date={project.date}
                description={project.decription}
                sourceURL={project.sourceURL}
                hostedURL={project.hostedURL}
                tech={project.tech}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  </div>
)
