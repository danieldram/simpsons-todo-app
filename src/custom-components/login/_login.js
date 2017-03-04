import React, { Component } from 'react';

export class Login extends Component {
  constructor(props){
    super(props)
    this.props = props;
    console.log(props)
  }
  render() {
    return (
      <div className="login container">
        <h1>Login Box</h1>
      </div>
    );
  }


}
