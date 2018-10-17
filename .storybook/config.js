import { setAddon, configure, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'

setAddon(JSXAddon)
addDecorator(withKnobs)

const req=  require.context('../src', true, /.storybook.js$/ )

function loadStories(){
    require('./welcomStory')
    req.keys().forEach(file => req(file))
}

configure(loadStories, module)