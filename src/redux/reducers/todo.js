import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'
import shortid from 'shortid'

import * as UTILS from '../../z_utils'
import * as ACT from '../action-types'


/* SET INITIAL STATE OF HOMER'S TODOS */
const InitialState = [
  {id:shortid.generate(), todo: 'Pick up Bart', status:'pending'},
  {id:shortid.generate(), todo: 'Take Lisa to the boring museum', status:'pending'},
  {id:shortid.generate(), todo: 'Have a frosty Duff beer after work', status: 'complete'}
]

const todo = (state=InitialState, {type, todo}) => {


  deepFreeze(state)

  switch(type){
    case ACT.REMOVE_TODO: return UTILS.RemoveFromCollectionById(state, 'id', todo.id)

    case ACT.ADD_TODO: return state.concat(todo)

    default: return state
  }


}


export const TodoStore = createStore(todo)
