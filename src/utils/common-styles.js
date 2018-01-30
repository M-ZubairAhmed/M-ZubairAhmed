import styled from 'styled-components'
import { space } from 'styled-system'

const greyColor = ['#404040', '#7F7F7F', '#BFBFBF', '#E5E5E5']

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  color: #ffffff;
`

export const Card = styled.div`
  border: ${`0.8px solid ${greyColor[3]}`};
  border-radius: 4px;
  ${space};
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`

export const Heading1Text = styled.h1`
  color: ${greyColor[0]};
  font-weight: 900;
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
`

export const Heading2Text = styled.h2`
  color: ${props => (props.primary ? greyColor[1] : greyColor[2])};
  font-weight: 900;
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
`

export const Heading3Text = styled.h3`
  ${space};
  color: ${props => (props.primary ? greyColor[1] : greyColor[3])};
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`
