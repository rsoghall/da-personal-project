import React, { Component } from 'react'
import logo from './../images/logo-color.jpg'
import './Login.css'

export class Login extends Component {
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }
  render() {
    return (
      <div className='login-container'>
        <h1>Login</h1>
            <img className='loginlogo' src={logo} alt='Dianne Adair Logo'/>
            <p>
          <span>Email:</span>
          <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text" />
        </p>
        <p>
          <span>Password:</span>
          <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text" />
        </p>

      </div>
    )
  }
}

export default Login
