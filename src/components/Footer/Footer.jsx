import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


export class Footer extends Component {
  render() {
    return (
      <div>
        <nav className='footer-container'>
        <div className='footer-corporate'>
        <Link to='/corporate'><button>Corporate Office</button></Link>
        </div>
        </nav>
      </div>
    )
  }
}

export default Footer
