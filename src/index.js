import React from 'react';
import ReactDOM from 'react-dom';
import {TodoStore, UserStore} from './redux'
import {Header} from './custom-components/header'
import App from './App.js'

import './index.css';

const components = [
    {component: <Header username={UserStore.getState().username}/>, element:'app-header'},
    {component: <App />, element:'root'}
]

const render = () => components.map((c)=> ReactDOM.render(c.component, document.getElementById(c.element)))


render()


TodoStore.subscribe(render)
UserStore.subscribe(render)
