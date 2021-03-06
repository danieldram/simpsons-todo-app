import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'


import './css/styles.css';

import { TodoStore, UserStore, SfxStore } from './redux'
import * as A from './redux/actions'
import { Login, Todo, Header } from './custom-components'

class App extends Component {


  goToLogin = () => {
    hashHistory.push('/')
    UserStore.dispatch(A.USER_LOGOUT())
  }

  componentDidMount(){
    SfxStore.dispatch(A.SFX_OPENING())
  }

  render() {
    return (
      <span>
        <Header back={this.goToLogin}></Header>
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
