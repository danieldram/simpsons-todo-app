
import * as ACT from './action-types'

export const REMOVE_TODO = (id) => { type: ACT.REMOVE_TODO, id}
export const ADD_TODO = ({id, todo, status}) => {type: ACT.ADD_TODO, id, todo, status}
