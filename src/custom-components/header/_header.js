import React from 'react'

import Homer from './homer-header.png'
import Logo from './logo.png'

import { UserStore } from '../../redux'

export const Header = (props) =>{
  const name = UserStore.getState().username
  const username = (name) ?  name : "Sign In"

  return (
    <div className="row app-header">
      <div className="nine columns filler">
        <div className="two columns the-simpsons  logo-box">
          <img src={Logo} />
        </div>
        <div className="two columns homer logo-box ">
          <img src={Homer} />
        </div>
      </div>
      <div className="three columns username">
          <h1>{username}</h1>
      </div>
    </div>
  )

}
