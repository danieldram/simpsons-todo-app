import React from 'react'

export const TextInputWithError = (props) =>{
  console.log(props)
  return(
    <div>
      <input type="text" className="u-full-width" placeholder={props.placeholder} onKeyPress={props.onKeyPressHandler}/>
      { (props.errorMessage) ? <p>{props.errorMessage}</p> : <span></span>}
    </div>
  )

}
