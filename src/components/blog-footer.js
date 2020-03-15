import React from 'react'

export default class BlogFooter extends React.Component {
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
