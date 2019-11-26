import styled, { css } from 'styled-components'

// theme mapper 합성어 사용시 _ 사용
const BUTTON_THEME = {
  DEFAULT: 'DEFAULT'
}

// theme css - 반드시 함수의 형태를 띄어야 합니다. params 로는 customCss 를 받습니다.
const THEME_CSS = {
  DEFAULT: customCss => css`
    width: 100%;
    height: 100%;
    ${customCss}
  `,
  ROUNDED: customCss => css`
  ${customCss}
  `
}

// methods
const getButtonCssByTheme = ({ theme, ...rest }) => {
  const themeCss = THEME_CSS[theme] || THEME_CSS.DEFAULT
  const customCss = css`
    ${rest}
  `
  return themeCss(customCss)
}

function StyledButton() {
  return styled.button`
    ${getButtonCssByTheme}
  `
}

export { BUTTON_THEME }
export default StyledButton
