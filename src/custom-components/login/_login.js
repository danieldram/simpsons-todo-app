import React, { Component } from 'react';
import { hashHistory } from 'react-router'

import {TextInputWithError} from '../../common-components/text-input-with-error-message'
import {Notes} from  './_notes'


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
        hashHistory.push('/todo')
      })
      evt.target.value = ''
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

                  <TextInputWithError
                    placeholder="Enter your valid username and then press Enter"
                    errorMessage={errorMessage}
                    onKeyPressHandler={this.onKeyPressHandler}
                    />

              </div>
          </div>
          <Notes />

        </div>
      </div>

    )
  }

}
