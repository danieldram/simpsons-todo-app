import { Observable } from 'rxjs'
import $ from 'jquery'
import * as ENV from './env'

export const DeleteTodo = (username, id) => {
  const source = Observable.create((observer)=>{

    $.ajax({

      url:`${ENV.SERVER_URL}/todo/delete/${username}/${id}`,
      type: 'DELETE',

      }).then((resp, status)=>{
        console.log(resp)
        observer.next(resp)
        observer.complete()
      }).catch(err => observer.error(err))


  })
  return source
}
