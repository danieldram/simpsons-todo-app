import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
//import { Home, About, Contact } from './custom-components/test'

import { Login } from './custom-components/'

import './css/styles.css';

import { TodoStore, UserStore } from './redux'

class App extends Component {

  login = (username) =>{
    console.log(username)
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
        <Route path="/" component={Login} gandler={this.login}></Route>

      </Router>
    );
  }
}

export default App;
