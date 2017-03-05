import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'


import './css/styles.css';

import { TodoStore, UserStore } from './redux'
import { Login } from './custom-components/login'

class App extends Component {

  onKeyPressHandler = (evt) =>{
    console.log(evt)
  }


  isLoggedIn = () => {
    return UserStore.getState().isLoggedIn
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
    );
  }
}


const routes = (
  <Route path="/" component={Login} > </Route>

)



export default App;
