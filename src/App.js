import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'


import './css/styles.css';

import { TodoStore, UserStore } from './redux'
import { Login, Todo, Header } from './custom-components'

class App extends Component {

  onKeyPressHandler = (evt) =>{
    console.log(evt)
  }

  isLoggedIn(){
    return (UserStore.getState().username) ? true : false
  }


  render() {
    return (
      <span>
        <Header back={()=>{hashHistory.push('/')}}></Header>
        <Router history={ hashHistory} >
          {routes}
        </Router>
      </span>
    )
  }

}


const requireAuth = (nextState, replace) =>{
  if(!UserStore.getState().username ){
    replace({
      pathname:'/'
    })
  }
}

const routes = (
    <span>
      <Route path="/" component={Login} > </Route>
      <Route path="/todo" component={Todo} onEnter={requireAuth} > </Route>
    </span>
)



export default App;
