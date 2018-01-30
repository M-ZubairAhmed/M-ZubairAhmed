import React from 'react'
import { Button, Icon, Image, Item, Label, LabelGroup, List } from 'semantic-ui-react'

export default props => (
  <Item style={{ padding: '30px' }}>
    <Item.Content as="a" href={props.url} target="_blank">
      <Item.Header>{props.title}</Item.Header>
      <Item.Meta>{props.date}</Item.Meta>
      <Item.Meta>{props.description}</Item.Meta>
      <Item.Extra>
        {props.readDuration === '1'
          ? `${props.readDuration} min read`
          : `${props.readDuration} mins read`}
      </Item.Extra>
    </Item.Content>
  </Item>
)
