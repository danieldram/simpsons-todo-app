import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'
import shortid from 'shortid'

import * as UTILS from '../../z_utils'
import * as ACT from '../action-types'


/* SET INITIAL STATE OF TODOS */
const InitialState = []

const todo = (state=InitialState, {type, todo}) => {

  deepFreeze(state)

  switch(type){
    case ACT.ADD_TODO:
      return state.concat(todo)

    case ACT.REMOVE_TODO:
      return state.filter(o => o.id!=todo.id)

    case ACT.COMPLETE_TODO:
      const filtered = state.filter(o => o.id!=todo.id)
      const index = state.map((o, i) => (o.id==todo.id) ? i: null).filter(i => !!i).reduce((a,b)=>a+b, 0)
      const update = Object.assign({}, state.filter(o => o.id==todo.id).reduce((a,b)=>b, 0))
      update.status = 'complete'
      const split1 = state.slice(0,index)
      const split2 = state.slice(index+1)

      return [...split1, update, ...split2]

    case ACT.INITIAL_TODOS:
      return todo

    default: return state
  }


}


export const TodoStore = createStore(todo)
