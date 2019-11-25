
import React from 'react'
import StyledDiv from './StyledDiv.styled.js'

function Div ({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>
}

Div.defaultProps = {
  children: ''
}

export default Div

