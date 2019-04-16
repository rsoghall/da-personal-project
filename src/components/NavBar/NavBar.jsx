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
      return <li>{center.center_name}</li>
    })
    return (
      <nav className='navbar-container'>
          <ul className='navbar-links'>
            <Link to='/'><img className='logo' src={logo} alt='Dianne Adair Logo'/></Link>
            <Link to='/login'><li>Log In</li></Link>
            <Link to='/events'><li>Events</li></Link>
            <Link to='/forms'><li>Forms</li></Link>
            <Link to='./about'><li>About Us</li> </Link>
            <Link to='/centers/:id'><li>Centers
                <ul>
                  {displayCenters}
                </ul>
              </li></Link>
          </ul>
        
      </nav>
    )
  }
}

export default navBar
