import React from 'react'

import { socialData } from '../utils/constants'

export default () => (
  <footer className="p-4">
    <h5 className="pb-3">I can be found on :</h5>
    <div className="d-flex justify-content-around flex-wrap">
      {socialData.map((social) => (
        <a
          className="btn btn-outline-secondary mx-1 my-2"
          href={social.link}
          target="_blank"
          style={{ minWidth: '10rem' }}
          rel="noopener noreferrer">
          {social.name}
        </a>
      ))}
    </div>
  </footer>
)
