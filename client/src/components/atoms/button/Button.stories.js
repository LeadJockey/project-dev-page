
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { Button, BUTTON_THEME } from 'components/atoms'
import draft from './Button.md'

// decorator
const stories = storiesOf('Components|Atoms/Button', module)
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
const IndexComponent = () => Object.values(BUTTON_THEME).map((theme, idx) => <Button key={idx} theme={theme}></Button>)
const ThemeComponent = () => <Button theme={select('formStyle', BUTTON_THEME, BUTTON_THEME.DEFAULT)}></Button>
const mdNote = draft
  .replace('${defaultProps}', Object.keys(Button.defaultProps).map(key=>`| ${key} | ${Button.defaultProps[key]} |`).join('\n'))
  .replace('${themeTypes}', Object.keys(BUTTON_THEME).map(key=>`* ${key}`).join('\n'))
// exec
stories
  .addDecorator(withKnobs)
  .addDecorator(withWrapper)
  .addParameters(info)
  .addParameters(bg)
  .add('Index', IndexComponent, { notes: mdNote })
  .add('Theme', ThemeComponent, { notes: mdNote })
