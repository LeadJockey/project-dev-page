import styled, { css } from 'styled-components'

const DIV_THEME = {
  DEFAULT: 'default',
  LINE: 'line',
  WIRE: 'wire'
}
const CSS_DEFAULT = custom => css`
  width: 100%;
  height: 100%;
  ${custom}
`

const CSS_LINE = css`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  outline: 1px solid;
`
const CSS_WIRE = css`
  width: 100%;
  height: 100%;
  display: table;
  background: linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      rgb(210, 210, 210) calc(50% - 1px),
      rgb(210, 210, 210) calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      to bottom right,
      transparent calc(50% - 1px),
      rgb(210, 210, 210) calc(50% - 1px),
      rgb(210, 210, 210) calc(50% + 1px),
      transparent calc(50% + 1px)
    );
`
const getDivCssByTheme = ({ theme, ...rest }) => {
  if (theme === DIV_THEME.WIRE) return CSS_WIRE
  if (theme === DIV_THEME.LINE) return CSS_LINE
  return CSS_DEFAULT
}
const THEME_T = {
  default: CSS_DEFAULT
}
const propertiesToStyled = ({ theme, ...rest }) => {
  return css`
    ${rest}
  `
}
const a = ({ t, ...rest }) => DIV_THEME[t](propertiesToStyled) || DIV_THEME.DEFAULT

const StyledDiv = styled.div`
  ${getDivCssByTheme}
`
export { DIV_THEME }
export default StyledDiv
