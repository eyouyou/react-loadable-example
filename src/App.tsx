import React from 'react'
import { render } from 'react-dom'

import 'rsuite/lib/styles/index.less';

import RoutedLayout from './components/RoutedLayout';
import routesConfig from './config/routes';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {

    return (
        <RoutedLayout routes={routesConfig} />
    )
}

render(<App />, mainElement)
