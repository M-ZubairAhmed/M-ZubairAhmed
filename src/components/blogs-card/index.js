import React from 'react'
import { Button, Icon, Image, Item, Label, LabelGroup, List } from 'semantic-ui-react'
import { truncrateString } from '../../utils/helpers'

export default props => (
  <Item style={{ padding: '30px' }}>
    <Item.Content>
      <Item.Header as="a" href={props.url} target="_blank">
        {props.title}
      </Item.Header>
      <Item.Meta>{props.date}</Item.Meta>
      <Item.Meta>{truncrateString(props.description, 320)}</Item.Meta>
      <Item.Extra>
        {props.readDuration === '1'
          ? `${props.readDuration} min read`
          : `${props.readDuration} mins read`}
      </Item.Extra>
    </Item.Content>
  </Item>
)
