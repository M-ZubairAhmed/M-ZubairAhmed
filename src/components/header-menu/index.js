import React from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import { Menu, Item, Button, Icon } from 'semantic-ui-react'

export default props => (
  <Headroom>
    <Menu fluid>
      <Link to="/">
        <Menu.Item name="Home">
          <Icon name="arrow left" />
          HOME
        </Menu.Item>
      </Link>
      <Menu.Item name={props.page} disabled />
    </Menu>
  </Headroom>
)
