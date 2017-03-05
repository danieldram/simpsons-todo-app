import React, { Component } from 'react';
//import { browserHistory  } from 'react-router'

import { TodoStore } from '../../redux'
import * as A from '../../redux/actions/index.js'
import * as helper from '../../z_helpers'

import {DataTable} from '../../common-components/data-table'

export class Todo extends Component {

  state = {
    addModal:false,
    inputValue:''
  }

  addTodo = () =>{
    const inputValue = this.state.inputValue
    !!inputValue &&  this.dispatchTodo(inputValue)
  }

  removeTodo = (id) => TodoStore.dispatch(A.REMOVE_TODO(id))

  completeTodo = (id) => TodoStore.dispatch(A.COMPLETE_TODO(id))

  setModal = () =>  this.setState({addModal:true})

  onChangeHandler = (evt) => this.setState({inputValue:evt.target.value})

  onBlurHandler = (evt) => evt.target.value = ''

  provideHeaders = () => Object.keys(TodoStore.getState()[0])


  dispatchTodo = (todoname) => TodoStore.dispatch(A.ADD_TODO(todoname))

  renderTodoModal = () => (
    <div className="row add-todo-modal">
      <div className="three columns">
        <h1>TODO NAME</h1>
      </div>
      <div className="six columns">
        <input type="text" className="u-full-width" onChange={this.onChangeHandler} onBlur={this.onBlurHandler}></input>
      </div>
      <div className="three columns">
        <button onClick={this.addTodo}>ADD</button>
      </div>
    </div>
  )

  renderDataTable = () => (
    <DataTable
      headers={this.provideHeaders()}
      body={TodoStore.getState()}
      removeDataItem={this.removeTodo}
      completeDataItem={this.completeTodo}
      />
    )


    renderDefaultMessage = () => (
      <div className="default-message twelve columns">
          <h1>There are no todos! Please add one!</h1>
      </div>
    )


  render(){
    return (
      <div className="container todo-container">
        <div className="twelve columns">

          { (TodoStore.getState().length > 0 ) ? this.renderDataTable() : <span></span> }

        </div>
        <div className="twelve columns todo-ui-container">
          <button onClick={this.setModal}> ADD TODO </button>
          <button> GO TO MOES </button>
          { (this.state.addModal) ? this.renderTodoModal() : this.renderDefaultMessage()}
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
