import React from 'react'
import { Link } from 'gatsby'
import { truncateText } from '../utils'

export default ({ previousArticle, nextArticle }) => {
  return (
    <footer className="d-md-flex d-lg-flex d-xl-flex justify-content-between flex-row-reverse">
      <div>
        {nextArticle.continueFurther && (
          <Link
            to={`blog/${nextArticle.path}`}
            rel="next"
            className="btn btn-secondary my-4 btn-block"
            title={nextArticle.title}>
            Continue next article &#187;
            <br />
            {truncateText(nextArticle.title, 30)}
          </Link>
        )}
      </div>
      <div>
        {previousArticle.continueFurther && (
          <Link
            to={`blog/${previousArticle.path}`}
            rel="prev"
            className="btn btn-outline-secondary my-4 btn-block"
            title={previousArticle.title}>
            &#171; Previous article
            <br />
            {truncateText(previousArticle.title, 30)}
          </Link>
        )}
      </div>
    </footer>
  )
}
