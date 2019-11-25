import React from 'react'
import StyledDiv, { DIV_THEME } from './Div.styled'

const Div = ({ children, ...rest }) => <StyledDiv {...rest}>{children}</StyledDiv>

Div.defaultProps = {
  theme: DIV_THEME.DEFAULT,
  disabled: false,
  children: ''
}

export default Div
