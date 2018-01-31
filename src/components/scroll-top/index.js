import React from 'react'
import styled from 'styled-components'

import { Heading3Text } from '../../utils/common-styles'

const Container = styled.a`
  cursor: pointer;
`

export default () => (
  <Container onClick={() => window.scrollTo(0, 0)}>
    <Heading3Text centerText>BACK TO TOP</Heading3Text>
  </Container>
)
