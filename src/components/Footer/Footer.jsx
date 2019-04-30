import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


export class Footer extends Component {
  render() {
    return (
      <div>
        <nav className='footer-wrapper'>
          <div className='footer-links'>
            <Link style={{ textDecoration: 'none', color: '#0B2FDF' }}>Conact Us</Link>
            <Link style={{ textDecoration: 'none', color: '#0B2FDF' }} to='/corporate'>Corporate Office</Link>
            <Link style={{ textDecoration: 'none', color: '#0B2FDF' }}>Careers</Link>
        </div>
        </nav>
      </div>
    )
  }
}

export default Footer
