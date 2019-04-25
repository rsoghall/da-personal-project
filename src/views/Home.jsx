import React, { Component } from 'react'
import './Home.css'
import Logo2 from '../images/logo2.jpg'

export class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Dianne Adair Enrichment Programs</h1>
        <div >
          <img className="home-logo" src={Logo2} alt="Dianne Adair Logo" />
          
          </div>
      </div>
    )
  }
}

export default Home
