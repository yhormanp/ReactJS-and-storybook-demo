import React from 'react'
import { storiesOf } from '@storybook/react'
import { text} from '@storybook/addon-knobs/react'
import { color } from '@storybook/addon-knobs/react'


import {Button} from './Button'

storiesOf('Button', module)
    .addWithJSX ('with background', () => <Button bg="yellow" >Hello world</Button>)
    .addWithJSX ('with background and color select', () => <Button bg={color ('bg', 'red')} >Hello world</Button>)
    .addWithJSX('with background 2', () => <Button bg={text('bg', 'green')} >Hello world 2</Button>)