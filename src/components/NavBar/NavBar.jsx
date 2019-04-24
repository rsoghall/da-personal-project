import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import store from '../../ducks/store'
import logo from './../../images/logo-tree-color.jpg'

export class navBar extends Component {
  constructor(){
    super()
    console.log(store)
    const reduxState=store.getState()
    console.log(reduxState)
    this.state = {
      centers: reduxState.centers
    }
  }

  componentDidMount(){
    store.subscribe(()=>{
      const reduxState=store.getState()
      this.setState({
        centers: reduxState.centers
      })
    })

  }
  render() {
    const displayCenters = this.state.centers.map(center => {
      return <Link to={`/centers/${center.center_id}`}><li>{center.center_name}</li></Link>
    })
    const displayCenterForms = this.state.centers.map(center => {
      return <Link to={`/forms/${center.center_id}`}><li>{center.center_name}</li></Link>
    })
    return (
      <nav className='navbar-container'>
      <Link to='/'><img className='logo' src={logo} alt='Dianne Adair Logo'/></Link>
          <ul className='navbar-links'>
            <Link to='/events'><li>Events</li></Link>
            {/* <Link to='/forms'><li>Forms</li></Link> */}
            <div className='forms-dropdown'>
                <li>Forms
                  <ul className='forms-dropdown-content'>
                  {displayCenterForms}
                  </ul>
                </li>
              </div>
            <Link to='./about'><li>About Us</li> </Link>
             <div className='centers-dropdown'>
                <li>Centers
                  <ul className='centers-dropdown-content'>
                  {displayCenters}
                  </ul>
                </li>
              </div>
            <Link to='/login'><li>Log In</li></Link>
          </ul>
        
      </nav>
    )
  }
}

export default navBar
