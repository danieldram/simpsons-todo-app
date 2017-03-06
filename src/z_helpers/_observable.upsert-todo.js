import { Observable } from 'rxjs'
import $ from 'jquery'
import * as ENV from './env'

export const UpsertTodo = (todo, username) => {
  const source = Observable.create((observer)=>{
      $.post(`${ENV.SERVER_URL}/todo/add/${username}`, todo).then((resp, status)=>{
        observer.next(resp)
        observer.complete()
      }).catch(err => observer.error(err))
  })
  return source
}
