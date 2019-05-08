import React from 'react'

export default (props) => (
  <div className={`pb-3 text-center mb-2`}>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead pb-3">{props.description}</p>
    <hr />
  </div>
)
