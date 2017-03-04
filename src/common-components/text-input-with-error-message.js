import React, {propTypes} from 'react'

export const TextInputWithError = (props) => (
  <div>
    <input type="text" className="u-full-width" placeholder={props.placeholder} />
    { (props.errorMessage) ? <p>{props.errorMessage}</p> : <span></span>}
  </div>
)
