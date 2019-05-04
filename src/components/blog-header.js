import React from 'react'

export default (props) => (
  <div className={`jumbotron bg-white pb-3 blogger-header mb-2`}>
    <h1 className="">{props.title}</h1>
    <p className="lead">{props.description}</p>
    <hr/>
  </div>
)
