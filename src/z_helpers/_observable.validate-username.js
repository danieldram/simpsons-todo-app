
import {GetUserData} from './_observable.get-user-data'
import * as util from '../z_utils'

export const ValidateUsername = (username) => {

  const validateUser = GetUserData
                        .map(collection => util.FilterByProperty(collection, 'name'))
                        .map(arr => arr.filter(name=>name===username))
                        .map( arr => arr.length===1&& username==arr[0] )

  return validateUser

}
