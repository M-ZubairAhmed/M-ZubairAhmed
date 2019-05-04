import React from 'react'
import { Link } from 'gatsby'
import { truncateText } from '../utils'

export default ({ previousArticle, nextArticle }) => {
  return (
    <footer className="d-flex justify-content-between align-items-end">
      <div>
        {previousArticle.continueFurther && (
          <Link
            to={`blog/${previousArticle.path}`}
            rel="prev"
            className="btn btn-outline-secondary">
            &#171; Previous article
            <br />
            {truncateText(previousArticle.title, 30)}
          </Link>
        )}
      </div>
      <div>
        {nextArticle.continueFurther && (
          <Link
            to={`blog/${nextArticle.path}`}
            rel="next"
            className="btn btn-secondary">
            Continue next article &#187;
            <br />
            {truncateText(nextArticle.title, 30)}
          </Link>
        )}
      </div>
    </footer>
  )
}
