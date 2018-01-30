import React from 'react'
import { Button, Icon, Image, Item, Label, LabelGroup, List } from 'semantic-ui-react'
import { Box } from 'grid-styled'

export default props => (
  <Item style={{ padding: '30px' }}>
    <Item.Image size="tiny" src={props.image} />
    <Item.Content>
      <Item.Header>{props.repositoryName}</Item.Header>
      <Item.Meta>{props.description}</Item.Meta>
      <Item.Extra>
        <Box px={2}>
          <List link bulleted>
            {props.pullRequests.map(pullRequest => (
              <List.Item as="a" target="_blank" href={pullRequest.pullURL}>
                {pullRequest.pullName}
              </List.Item>
            ))}
          </List>
        </Box>
      </Item.Extra>
    </Item.Content>
  </Item>
)
