import React, { Component } from 'react'

export const Header = (props) =>{
  console.log(props)

  return (
    <div className="row u-full-width">
      <h1>{props.username}</h1>
    </div>
  )

}
