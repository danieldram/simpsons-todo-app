import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoStore } from './redux'
import * as ACT from './redux/action-types'

class App extends Component {

  constructor(){
    super()

  }

  componentWillMount(){

  }

  removeTodo = (evt, id) => {
    console.log(evt);

    TodoStore.dispatch({
      type: ACT.REMOVE_TODO,
      id:2
    })


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {
            TodoStore.getState()
            .map(o => <div onClick={(evt)=>this.removeTodo(evt, o.id)} key={o.id}> {o.id} - {o.todo} - {o.status}</div>)
          }
        </div>
      </div>
    );
  }
}

export default App;
