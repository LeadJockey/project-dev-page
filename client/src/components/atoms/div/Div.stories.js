import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { Div, DIV_THEME } from 'components/atoms'
import divMarkdown from './Div.md'

// decorator
const stories = storiesOf('Components|Atoms/Div', module)
const withWrapper = story => <div style={{ margin: '10px', width: '300px', height: '300px', backgroundColor: '#efefef' }}>{story()}</div>
// parameters
const DivInfo = { info: { inline: true, header: false } }
const DivBackground = {
  background: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'pink', value: '#ff00ff', default: true },
    { name: 'black', value: '#000000', default: true }
  ]
}
// add
const IndexComponent = () => Object.values(DIV_THEME).map((theme, idx) => <Div key={idx} theme={theme}></Div>)
const ThemeComponent = () => <Div theme={select('formStyle', DIV_THEME, DIV_THEME.DEFAULT)}></Div>
const divMarkdownNote = divMarkdown
  .replace('${defaultProps}', Object.keys(Div.defaultProps).map(key=>`| ${key} | ${Div.defaultProps[key]} |`).join('\n'))
  .replace('${themeTypes}', Object.keys(DIV_THEME).map(key=>`* ${key}`).join('\n'))
// exec
stories
  .addDecorator(withKnobs)
  .addDecorator(withWrapper)
  .addParameters(DivInfo)
  .addParameters(DivBackground)
  .add('Index', IndexComponent, { notes: divMarkdownNote })
  .add('Theme', ThemeComponent, { notes: divMarkdownNote })
