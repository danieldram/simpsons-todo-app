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
    !!inputValue==true &&  this.dispatchTodo(inputValue) && this.setState({inputValue:false})
  }

  removeTodo = (id) => TodoStore.dispatch(A.REMOVE_TODO(id))

  completeTodo = (id) => TodoStore.dispatch(A.COMPLETE_TODO(id))

  setModal = (bool) =>  this.setState({addModal:bool})

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
      <div className="five columns">
        <button onClick={this.addTodo}>ADD</button>
        <button onClick={this.setModal.bind(null, false)}> CANCEL </button>
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

          { (TodoStore.getState().length > 0 ) ? this.renderDataTable() : this.renderDefaultMessage()}

        </div>
        <div className="twelve columns todo-ui-container">
          <button onClick={this.setModal.bind(null,true)}> ADD TODO </button>
          <button> GO TO MOES </button>
          { (this.state.addModal) ? this.renderTodoModal() : <span></span>}
        </div>

      </div>
    )
  }

}
