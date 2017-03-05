import React, { Component } from 'react';
import {TextInputWithError} from '../../common-components/text-input-with-error-message'

import Homer from './billboard.png'

import { UserStore } from '../../redux'
import * as A from '../../redux/actions/index.js'
import * as helper from '../../z_helpers'

export class Login extends Component {

  onKeyPressHandler = (evt) => {
    const key = evt.key
    const username = evt.target.value
    if(key==='Enter'){
      helper.ValidateUsername(username).subscribe((bool)=>{
        (bool===true) ? UserStore.dispatch(A.USER_LOGIN(username)) : UserStore.dispatch(A.USER_LOGIN_ERROR())
      })
    }
  }

  render(){

    let errorMessage = (UserStore.getState().error) ? "HEY! Don't touch my stuff!": undefined

    return  (
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
                  <TextInputWithError
                    placeholder="Enter your valid username and then order a 'TAB' "
                    errorMessage={errorMessage}
                    onKeyPressHandler={this.onKeyPressHandler}
                    />
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

}
