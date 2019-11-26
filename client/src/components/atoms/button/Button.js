
import React from 'react'
import StyledButton from './StyledButton.styled.js'

function Button ({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
  children: 123
}

export default Button

