import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
import { Home, About, Contact } from './custom-components/test'


import './App.css';

import { TodoStore, UserStore } from './redux'

class App extends Component {


  isLoggedIn = () => {
    return UserStore.getState().isLoggedIn
  }


  requireAuth = (nextState, replace) =>{
    if( !this.isLoggedIn() ){
      replace({
        pathname:'/contact'
      })
    }
  }


  render() {
    return (
      <Router history={ hashHistory} >
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About} onEnter={this.requireAuth}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    );
  }
}

export default App;
