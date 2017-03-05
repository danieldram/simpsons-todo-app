import React from 'react'

export const TextInputWithError = (props) =>{
  return(
    <div>
      <input type="text" className="u-full-width" placeholder={props.placeholder} onKeyPress={props.onKeyPressHandler} value="Leanne Graham"/>
      { (props.errorMessage) ? <p>{props.errorMessage}</p> : <span></span>}
    </div>
  )

}
