import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'


import './css/styles.css';

import { TodoStore, UserStore } from './redux'
import { Login, Todo } from './custom-components'

class App extends Component {

  onKeyPressHandler = (evt) =>{
    console.log(evt)
  }


  requireAuth = (nextState, replace) =>{
    if( !this.isLoggedIn() ){
      replace({
        pathname:'/'
      })
    }
  }


  render() {
    return (
      <Router history={ hashHistory} >
        {routes}
      </Router>
    )


  }
}


const routes = (
    <span>
      <Route path="/" component={Login} > </Route>
      <Route path="/todo" component={Todo} > </Route>
    </span>
)



export default App;
