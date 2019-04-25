import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../ducks/store'
import './Centers.css'

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
          <div className='centers-title'>
            <h1> Dianne Adair</h1>
            <h1>{displayCenter.center_name}</h1>
          </div>  
        <img src={displayCenter.director_url} alt={displayCenter.director_name} />
        <h4>Director: {displayCenter.director_name}</h4>
        <div className='centers-displayInfo'>
          <h4>{displayCenter.director_address}</h4>
          <h4>{displayCenter.director_email}</h4>
          <h4>{displayCenter.director_phone}</h4>
        </div>
        <div className='centers-license'>
        <h5>State License# {displayCenter.state_license}</h5>
        </div>
        <div className='centers-links-container'>
        <div className='centers-reg-link'> 
          <a href={displayCenter.registration_form} download target="_blank" rel="noopener noreferrer" ><button>Registration Forms</button></a>
        </div>
        <div className='centers-staff-link'>
          <Link to={`/centers/staff/${displayCenter.center_id}`}><button>Staff</button></Link>
        </div>
        </div>

      </div>
    )
  }
}

export default Centers
