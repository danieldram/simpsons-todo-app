
const ACT = require('../action-types')

export const REMOVE_TODO = (id) => ({type:ACT.REMOVE_TODO, id})
export const ADD_TODO = ({id, todo, status}) => ({type: ACT.ADD_TODO, id, todo, status})


export const USER_LOGIN = (username) => ({type: ACT.USER_LOGIN, username})
export const USER_LOGIN_ERROR = (bool) => ({type: ACT.USER_LOGIN_ERROR, bool})
