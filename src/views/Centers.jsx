import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../ducks/store'

export class Centers extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state={
        centers: reduxState.centers
    }
  }
  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        centers: reduxState.centers
      })
    })
  }
  
  render() {
    const centerID = +this.props.match.params.id
    const [displayCenter] = this.state.centers.filter(center => centerID === center.center_id)
    if(!displayCenter){
      return <h1>loading</h1>
    }
    return (
      <div>
        <h1>{displayCenter.center_name}</h1>
        <img src={displayCenter.director_url} alt={displayCenter.director_name}/>
        <div className='centers-displayInfo'>
          <h4>{displayCenter.director_address}</h4>
          <h4>{displayCenter.director_email}</h4>
          <h4>{displayCenter.director_phone}</h4>
          <h4>{displayCenter.registration_form}</h4>
        </div>
        <h5>State License# {displayCenter.state_license}</h5>
        <Link to='/staff'><li>Staff</li></Link>
      </div>
    )
  }
}

export default Centers
