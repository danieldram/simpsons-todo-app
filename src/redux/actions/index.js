
const ACT = require('../action-types')

export const REMOVE_TODO = (id) => ( { type:ACT.REMOVE_TODO, todo:{id} } )
export const ADD_TODO = (todo) => ({ type: ACT.ADD_TODO, todo:todo } )
export const COMPLETE_TODO = (id) => ( { type: ACT.COMPLETE_TODO, todo:{id} } )
export const INITIAL_TODOS = (todos) => ({type:ACT.INITIAL_TODOS, todo:todos})




export const USER_LOGIN = (username) => ( {type: ACT.USER_LOGIN, username} )
export const USER_LOGIN_ERROR = (bool) => ( {type: ACT.USER_LOGIN_ERROR, bool} )
