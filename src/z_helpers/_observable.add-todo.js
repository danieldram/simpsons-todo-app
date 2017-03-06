import { Observable } from 'rxjs'
import $ from 'jquery'

export const AddNewTodo = (todo, username) => {
  const source = Observable.create((observer)=>{
      $.post(`http://localhost:3003/todo/add/${username}`, todo, (resp)=>{
        observer.next(resp)
        observer.complete()
      })
  })
  return source
}
