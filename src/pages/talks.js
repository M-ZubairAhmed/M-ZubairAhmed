import React from 'react'
import App from '../app'
import { Link, graphql } from 'gatsby'

import { Jumbotron } from '../common/components'

const BlogCard = ({ title, excerpt, link }) => (
  <Link to={link} key={link} className="text-decoration-none">
    <div className="p-3 mb-4 border border-secondary rounded rounded-lg card-hover-effect">
      <h5 className="card-title text-decoration-none">{title}</h5>
      <h6 className="card-subtitle mb-2 color-2 text-decoration-none">
        {excerpt}...<strong>Continue reading</strong>
      </h6>
    </div>
  </Link>
)

export default (props) => {
  // const {
  //   data: {
  //     allMarkdownRemark: { edges: BlogsEdges },
  //   },
  // } = props

  // const blogs = BlogsEdges.map((edge) => {
  //   const {
  //     node: { frontmatter },
  //   } = edge

  //   return frontmatter
  // }).sort(
  //   (blogA, blogB) => parseInt(blogA.serial, 10) < parseInt(blogB.serial, 10),
  // )

  return (
    <App
      title="My Talks"
      description="I try to get engaged with the community by talks, meetups, discussions."
      location={props.location}>
      <Jumbotron
        title="My Talks"
        description="I try to get engaged with the community by talks, meetups, discussions."
      />
      <section className="mb-5 px-3">
        {/* {blogs.map((blog) => (
          <BlogCard
            key={blog.path}
            title={blog.title}
            excerpt={blog.excerpt}
            link={blog.path}
          />
        ))} */}
      </section>
    </App>
  )
}

// export const pageQuery = gs
