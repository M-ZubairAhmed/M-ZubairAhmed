import React from 'react'
import { Link } from 'gatsby'

export const Jumbotron = (props) => (
  <header className={`px-3 py-5`}>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.description}</p>
  </header>
)

export const BlogCard = ({ title, excerpt, link }) => (
  <Link to={link} key={link} className="text-decoration-none">
    <div className="p-3 mb-4 border border-secondary rounded rounded-lg card-hover-effect">
      <h5 className="card-title text-decoration-none">{title}</h5>
      <h6 className="card-subtitle mb-2 color-2 text-decoration-none">
        {excerpt}...<strong>Continue reading</strong>
      </h6>
    </div>
  </Link>
)

export class BlogFooter extends React.Component {
  likeBlogPost(e) {
    e.preventDefault()
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <aside>
          <button onClick={(e) => this.likeBlogPost(e)}>Like</button>
        </aside>
        <footer>footer</footer>
      </>
    )
  }
}
export const BlogHeader = (props) => (
  <div className={`pb-3 text-center mb-2`}>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead mb-0">{props.description}</p>
    <p className="pb-3">
      {parseInt(props.timeToRead, 10) === 1
        ? `${props.timeToRead} min read`
        : `${props.timeToRead} mins read`}
    </p>
    <hr />
  </div>
)
