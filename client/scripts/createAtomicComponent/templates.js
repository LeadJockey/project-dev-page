// create - template
const createBaseComp = componentName => {
  const StyledComponent = `Styled${componentName}` // ex StyledDiv

  return `
import React from 'react'
import ${StyledComponent} from './${StyledComponent}.styled.js'

function ${componentName} ({ children, ...rest }) {
  return <${StyledComponent} {...rest}>{children}</${StyledComponent}>
}

${componentName}.defaultProps = {
  children: ''
}

export default ${componentName}

`
}
const createStyledComp = componentName => {
  const COMP_THEME = `${componentName.toUpperCase()}_THEME` // ex ${COMP_THEME}
  const StyledComponent = `Styled${componentName}` // ex StyledDiv
  const getCompCssByTheme = `get${componentName}CssByTheme` // ex getDivCssByTheme

  return `
import styled, { css } from 'styled-components'

// theme mapper 합성어 사용시 _ 사용
const ${COMP_THEME} = {
  DEFAULT:'DEFAULT'
}

// theme css - 반드시 함수의 형태를 띄어야 합니다. params 로는 customCss 를 받습니다.
const THEME_CSS = {
  DEFAULT: customCss => css\`
              width:100%;
              height:100%;
              \${customCss}
            \`,
  
}

// methods
const ${getCompCssByTheme} = ({ theme, ...rest }) => {
  const themeCss = THEME_CSS[theme] || THEME_CSS.DEFAULT
  const customCss = css\`
  \${rest}
  \`
  return themeCss(customCss)
}

function ${StyledComponent} (){
  return styled.${componentName.toLowerCase()}\`
    \${${getCompCssByTheme}}
  \`
} 

export { ${COMP_THEME} }
export default ${StyledComponent}

`
}
const createMD = (atomicName, componentName) => {
  return `
  # ${componentName}

  #### *${componentName} 컴포넌트는 ?*
  
  * 스타일드 컴포넌트를 반환하는 일종의 랩퍼 컴포넌트로 설계되었습니다.
  * 반드시 기본 프로퍼티가 설정되어야 합니다.
  
  ***
  
  ## Directory Structure
  
  #### *Components - ${atomicName} - ${componentName}*
  
\`\`\`
.
├── ${componentName}.js          - for exporting ${componentName} Component
├── ${componentName}.md          - for notice
├── ${componentName}.stories.js  - for storybook
└── ${componentName}.styled.js   - for theming & styling
└── ${componentName}.test.js     - for testing
\`\`\`

  ***
  
  ## Default Properties
  
  #### *컴포넌트의 프로퍼티는 ${componentName}.defaultProps 에 정의 되어야 합니다.*
  
  | key | value |
  | --- | --- |
  \${defaultProps}
  
  ***
  
  
  ## Theme
  
  #### *스타일드 컴포넌트는 내부에서 정의된 CSS를 사용합니다.*
  
  \${themeTypes}
  
`
}
const createStories = (atomicName, componentName) => {
  const COMP_THEME = `${componentName.toUpperCase()}_THEME` // ex ${COMP_THEME}

  return `
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { ${componentName}, ${COMP_THEME} } from 'components/${atomicName.toLowerCase()}'
import draft from './${componentName}.md'

// decorator
const stories = storiesOf('Components|${atomicName}/${componentName}', module)
const withWrapper = story => <div style={{ margin: '10px', width: '300px', height: '300px', backgroundColor: '#efefef' }}>{story()}</div>
// parameters
const info = { info: { inline: true, header: false } }
const bg = {
  background: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'pink', value: '#ff00ff', default: true },
    { name: 'black', value: '#000000', default: true }
  ]
}
// add
const IndexComponent = () => Object.values(${COMP_THEME}).map((theme, idx) => <${componentName} key={idx} theme={theme}></${componentName}>)
const ThemeComponent = () => <${componentName} theme={select('formStyle', ${COMP_THEME}, ${COMP_THEME}.DEFAULT)}></${componentName}>
const mdNote = draft
  .replace('\${defaultProps}', Object.keys(${componentName}.defaultProps).map(key=>\`| \${key} | \${${componentName}.defaultProps[key]} |\`).join('\\n'))
  .replace('\${themeTypes}', Object.keys(${COMP_THEME}).map(key=>\`* \${key}\`).join('\\n'))
// exec
stories
  .addDecorator(withKnobs)
  .addDecorator(withWrapper)
  .addParameters(info)
  .addParameters(bg)
  .add('Index', IndexComponent, { notes: mdNote })
  .add('Theme', ThemeComponent, { notes: mdNote })
`
}
const createTest = componentName => ''
const createSCSS = componentName => {
  return `
*{margin:0, padding:0}
`
}

module.exports = {
  createBaseComp,
  createStyledComp,
  createMD,
  createStories,
  createTest,
  createSCSS
}
