import React, { Component } from 'react'
import store from '../ducks/store'
import axios from 'axios'
import {getStaff} from './../ducks/store'

export class Staff extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state={
            staff: reduxState.staff
        }
      }
      componentDidMount(){
        axios.get('api/staff').then(staff => {
            store.dispatch(getStaff(staff.data))
            })
        store.subscribe(() => { 
          const reduxState = store.getState()
          this.setState({
            staff: reduxState.staff
          })
        })
      }
      
   
      render() {
        const staffID = +this.props.match.params.id
        const [displayStaff] = this.state.staff.filter(staff => staffID === staff.staff_id)
        if(!displayStaff){
          return <h1>loading</h1>
        }
        return (
          <div>
              <h1> Staff </h1>
            <h1>{displayStaff.staff_name}</h1>
            <img src={displayStaff.staff_url} alt={displayStaff.staff_name}/>
            <div className='staff-displayInfo'>
              <h4>{displayStaff.staff_info}</h4>
            </div>
            
          </div>
        )
      }
    }

export default Staff
