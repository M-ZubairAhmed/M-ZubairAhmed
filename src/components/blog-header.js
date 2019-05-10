import React from 'react'

export default (props) => (
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
