
const ACT = require('../action-types')

export const REMOVE_TODO = (id) => ( { type:ACT.REMOVE_TODO, todo:{id} } )
export const ADD_TODO = (todo) => ({ type: ACT.ADD_TODO, todo:todo } )
export const COMPLETE_TODO = (id) => ( { type: ACT.COMPLETE_TODO, todo:{id} } )
export const INITIAL_TODOS = (todos) => ({type:ACT.INITIAL_TODOS, todo:todos})




export const USER_LOGIN = (username) => ( {type: ACT.USER_LOGIN, username} )
export const USER_LOGIN_ERROR = (bool) => ( {type: ACT.USER_LOGIN_ERROR, bool} )
export const USER_LOGOUT = () => ({type: ACT.USER_LOGOUT})


export const SFX_DOH = () => ({type: ACT.SFX_DOH})
export const SFX_WOHOO = () => ({type: ACT.SFX_WOHOO})
export const SFX_OPENING = ()=> ({type: ACT.SFX_OPENING})
export const SFX_STOP = () => ({type: ACT.SFX_STOP})
