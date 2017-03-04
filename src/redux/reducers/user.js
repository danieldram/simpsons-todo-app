import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'

import * as UTILS from '../../z_utils'
import * as ACT from '../action-types'


/* SET INITIAL STATE OF USER TODOS */
const InitialState = {
  username:'',
  isLoggedIn:true
}

const user = (state=InitialState, {type, username}) => {


  deepFreeze(state)

  switch(type){
    case ACT.USER_LOGIN:
       const ns = {username: username, isLoggedIn:true}
    return ns

    default:
    return state
  }


}


export const UserStore = createStore(user)
