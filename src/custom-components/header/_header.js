import React, {propTypes, Component } from 'react'

import Homer from './homer-header.png'
import Logo from './logo.png'
export const Header = (props) =>{

  const username = (props.username) ? props.username : "Sign In"

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
