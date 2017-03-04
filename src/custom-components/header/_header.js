import React, {propTypes, Component } from 'react'


export const Header = (props) =>{

  const username = (props.username) ? props.username : "Sign In"

  return (
    <div className="row app-header">
      <div className="ten columns filler">&nbsp;</div>
      <div className="two columns username">
          <h1>{username}</h1>
      </div>
    </div>
  )

}
