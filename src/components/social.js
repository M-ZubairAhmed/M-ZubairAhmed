import React from 'react'

const socialData = [
  {
    link: 'https://github.com/M-ZubairAhmed/',
    icon: 'fab fa-github',
    name: 'Github',
  },
  {
    link: 'https://twitter.com/Md_ZubairAhmed/',
    icon: 'fab fa-twitter',
    name: 'Twitter',
  },
  {
    link: 'https://www.linkedin.com/in/md-zubairahmed/',
    icon: 'fab fa-linkedin',
    name: 'Linkedin',
  },
  {
    link: 'https://stackoverflow.com/story/md_zubairahmed',
    icon: 'fab fa-angellist',
    name: 'Stackoverflow',
  },
  {
    link: 'https://angel.co/m-zubair-ahmed/',
    icon: 'fab fa-angellist',
    name: 'AngelList',
  },
  {
    link: 'mailto:m-zubairahmed@protonmail.com',
    icon: 'far fa-envelope',
    name: 'Email',
  },
]

export default () => (
  <div className="p-4">
    <h5 className="pb-3">
      I can be found on the <mark>Internet</mark> via
    </h5>
    <ul className="list-group list-group-horizontal-xl list-group-horizontal-lg">
      {socialData.map((social) => (
        <li className="list-group-item flex-fill text-center" key={social.name} title={social.link}>
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
  </div>
)
