import shortid from 'shortid'
const ACT = require('../action-types')

export const REMOVE_TODO = (id) => ({type:ACT.REMOVE_TODO, id})
export const ADD_TODO = (todoname) => ({type: ACT.ADD_TODO, todo:{id:shortid.generate(), todo:todoname, status:'pending'}})


export const USER_LOGIN = (username) => ({type: ACT.USER_LOGIN, username})
export const USER_LOGIN_ERROR = (bool) => ({type: ACT.USER_LOGIN_ERROR, bool})
