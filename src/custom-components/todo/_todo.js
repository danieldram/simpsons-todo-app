import React, { Component } from 'react';
//import { browserHistory  } from 'react-router'

import { TodoStore } from '../../redux'
import * as A from '../../redux/actions/index.js'
import * as helper from '../../z_helpers'

import {DataTable} from '../../common-components/data-table'

export class Todo extends Component {

  provideHeaders = () => Object.keys(TodoStore.getState()[0])


  render(){
    return (
      <div className="container todo-container">

        <DataTable headers={this.provideHeaders()} body={TodoStore.getState()} />

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
