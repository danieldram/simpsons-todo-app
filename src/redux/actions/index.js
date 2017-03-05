import shortid from 'shortid'
const ACT = require('../action-types')

export const REMOVE_TODO = (id) => ( { type:ACT.REMOVE_TODO, todo:{id} } )
export const ADD_TODO = (todoname) => ( { type: ACT.ADD_TODO, todo:{id:shortid.generate(), todo:todoname, status:'pending'} } )
export const COMPLETE_TODO = (id) => ( { type: ACT.COMPLETE_TODO, todo:{id} } )

export const USER_LOGIN = (username) => ( {type: ACT.USER_LOGIN, username} )
export const USER_LOGIN_ERROR = (bool) => ( {type: ACT.USER_LOGIN_ERROR, bool} )
