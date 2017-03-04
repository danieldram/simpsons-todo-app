import React, { Component } from 'react';
import {TextInputWithError} from '../../common-components/text-input-with-error-message'

import Homer from './billboard.png'

export const Login = (props) =>{

  let errorMessage = (!props.error) ? "HEY! Don't touch my stuff!": undefined

  return (


    <div className="login container">

      <div className="row">

        <div className="five columns login-image">
          <img src={Homer}></img>
        </div>

        <div className="seven columns login-form">
            <div className="tweleve columns login-message">
              <h1>HOMER'S LIST OF IMPORANT TODOS APP</h1>
            </div>
            <div className="twelve columns">
              <div className="tweleve columns">
                <TextInputWithError placeholder="Enter your valid username and then press the 'any' key" errorMessage={errorMessage} />
              </div>
              <div className="tweleve columns">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
              </div>
            </div>

        </div>

      </div>
    </div>

  )
}
