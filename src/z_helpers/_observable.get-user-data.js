import { Observable } from 'rxjs'
import $ from 'jquery'

export const GetUserData = Observable.create((observer)=>{
    $.get('https://jsonplaceholder.typicode.com/users')
      .then((resp)=>{
        observer.next(resp)
        observer.complete()
      })
      .catch(err=>observer.error(err))

})
