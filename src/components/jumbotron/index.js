import React from "react"
import { Jumbotron } from "react-bootstrap"

const MyJumbo = props => (
  <Jumbotron fluid className="myjumbo">
    <div className="myjumbo_content">
      <h1>{props.title}</h1>
      <span>
        <p>{props.body}</p>
      </span>
      <span>
        <p>{props.body2}</p>
      </span>
    </div>
  </Jumbotron>
)

export default MyJumbo
