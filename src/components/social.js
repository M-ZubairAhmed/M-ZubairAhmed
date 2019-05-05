import React from 'react'

import { socialData } from '../utils/constants'

export default () => (
  <footer className="p-4">
    <h5 className="pb-3">
      I can be found on the <mark>Internet</mark> via
    </h5>
    <ul className="list-group list-group-horizontal-xl list-group-horizontal-lg">
      {socialData.map((social) => (
        <li
          className="list-group-item flex-fill text-center"
          key={social.name}
          title={social.link}>
          <a
            style={{ color: '#000' }}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer">
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  </footer>
)
