import React, { Component } from 'react';
//import { browserHistory  } from 'react-router'

import { TodoStore } from '../../redux'
import * as A from '../../redux/actions/index.js'
import * as helper from '../../z_helpers'

import {DataTable} from '../../common-components/data-table'

export class Todo extends Component {

  state = {
    inputValue:''
  }

  addTodo = () =>{
    const inputValue = this.state.inputValue
    !!inputValue &&  this.dispatchTodo(inputValue)
  }

  onChangeHandler = (evt) => this.setState({inputValue:evt.target.value})

  provideHeaders = () => Object.keys(TodoStore.getState()[0])

  removeTodo = (id) => TodoStore.dispatch(A.REMOVE_TODO(id))

  dispatchTodo = (todoname) => TodoStore.dispatch(A.ADD_TODO(todoname))

  render(){
    return (
      <div className="container todo-container">
        <div className="twelve columns">
          <DataTable
            headers={this.provideHeaders()}
            body={TodoStore.getState()}
            removeDataItem={this.removeTodo}
            />

      </div>
        <div className="twelve columns todo-ui-container">
          <button> ADD TODO </button>
          <button> GO TO MOES </button>

          <div className="row add-todo-modal">
            <div className="three columns">
              <h1>TODO NAME</h1>
            </div>
            <div className="six columns">
              <input type="text" className="u-full-width" onChange={this.onChangeHandler}></input>
            </div>
            <div className="three columns">
              <button onClick={this.addTodo}>ADD</button>
            </div>
          </div>

        </div>

      </div>
    )
  }

}


const headers = [
  'name',
  'age',
  'salary'
]

const body = [
  {id:1, name:'tedd', age:53, salary:'5200'},
  {id:2, name:'fred', age:13, salary:'10200'},
  {id:3, name:'jamey', age:10, salary:'5600'},
]
