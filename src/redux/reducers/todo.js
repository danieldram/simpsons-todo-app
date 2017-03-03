import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'

import * as UTILS from '../../z_utils'
import * as ACT from '../action-types'


/* SET INITIAL STATE OF HOMER'S TODOS */
const InitialState = [
  {id:0, todo: 'Pick up Bart', status:'pending'},
  {id:1, todo: 'Take Lisa to the boring museum', status:'pending'},
  {id:2, todo: 'Have a frosty Duff beer after work', status: 'complete'}
]

const todo = (state=InitialState, {type, id, todo, status}) => {

  //NOTE: deepFreeze ensures object is deeply immutable
  deepFreeze(state)

  switch(type){
    case ACT.REMOVE_TODO:
      // const ns = UTILS.RemoveFromCollectionById(state, 'id', id)
    return [  {id:1, todo: 'Take Lisa to the boring museum', status:'pending'},
      {id:2, todo: 'Have a frosty Duff beer after work', status: 'complete'}]

    default:
    return state
  }


}


export const TodoStore = createStore(todo)
