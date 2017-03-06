import { Observable } from 'rxjs'
import $ from 'jquery'
import * as ENV from './env'

export const GetTodos = (username) => {
  const source = Observable.create((observer)=>{
      $.get(`${ENV.SERVER_URL}/todo/get/${username}`).then((resp, status)=>{
        const data = resp.data
        observer.next(data)
        observer.complete()
      }).catch(err => observer.error(err))


  })
  return source
}
