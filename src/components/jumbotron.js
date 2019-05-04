import React from 'react'

export default (props) => (
  <div className={`jumbotron bg-white`}>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.description}</p>
  </div>
)
