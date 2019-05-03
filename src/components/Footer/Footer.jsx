import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


export class Footer extends Component {
  render() {
    return (
      <div>
        <nav className='footer-wrapper'>
          <div className='footer-links'>
            <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/'>Conact Us</Link>
            <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/corporate'>Corporate Office</Link>
            <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/'>Careers</Link>
        </div>
        </nav>
      </div>
    )
  }
}

export default Footer
