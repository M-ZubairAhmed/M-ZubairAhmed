import React from 'react'
import { Button, Icon, Image, Item, Label, LabelGroup } from 'semantic-ui-react'

export default props => (
  <Item style={{ padding: '30px' }}>
    <Item.Image size="tiny" src={props.image} />
    <Item.Content>
      <Item.Header style={{ paddingRight: '10px' }}>{props.title}</Item.Header>
      <Item.Meta as="a" target="_blank" href={props.url}>
        {props.url}
      </Item.Meta>
      <Button size="mini" as="a" href={props.repo} target="_blank" basic floated="right">
        Show Code
      </Button>
      <Item.Meta>{props.description}</Item.Meta>
      <Item.Extra>
        {props.technologies.map(technology => (
          <Label circular key={technology}>
            {technology}
          </Label>
        ))}
      </Item.Extra>
    </Item.Content>
  </Item>
)
