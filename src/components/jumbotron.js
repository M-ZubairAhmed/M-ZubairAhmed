import React from 'react'

export default (props) => (
  <header className={`px-3 py-5`}>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.description}</p>
  </header>
)
