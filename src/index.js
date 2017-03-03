import React from 'react';
import ReactDOM from 'react-dom';
import {TodoStore} from './redux'
import App from './App';
import './index.css';

const render = () => ReactDOM.render( <App />, document.getElementById('root'));
render()

TodoStore.subscribe(render)
