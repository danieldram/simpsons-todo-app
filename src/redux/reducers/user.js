import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'


import * as ACT from '../action-types'


/* SET INITIAL STATE OF USER TODOS */
const InitialState = {
  username:'',
  isLoggedIn:false,
  error:0
}

const user = (state=InitialState, {type, username}) => {


  deepFreeze(state)

  switch(type){
    case ACT.USER_LOGIN:
      return {username:username, isLoggedIn:true, error:false}
    case ACT.USER_LOGIN_ERROR:
      console.log('in redux');
      return {username:'', isLoggedIn:false, error:true};
    default: return state
  }


}


export const UserStore = createStore(user)
