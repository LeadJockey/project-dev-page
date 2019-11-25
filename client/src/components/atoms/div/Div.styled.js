import styled, { css } from 'styled-components'

// theme mapper 합성어 사용시 _ 사용
const DIV_THEME = {
  DEFAULT: 'DEFAULT'
}

// theme css - 반드시 함수의 형태를 띄어야 합니다. params 로는 customCss 를 받습니다.
const THEME_CSS = {
  DEFAULT: customCss => css`
    width: 100%;
    height: 100%;
    ${customCss}
  `
}

// methods
const getDivCssByTheme = ({ theme, ...rest }) => {
  const themeCss = THEME_CSS[theme] || THEME_CSS.DEFAULT
  const customCss = css`
    ${rest}
  `
  return themeCss(customCss)
}

function StyledDiv() {
  return styled.div`
    ${getDivCssByTheme}
  `
}

export { DIV_THEME }
export default StyledDiv
