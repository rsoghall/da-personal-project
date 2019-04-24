import React, { Component } from 'react'
import store from '../ducks/store'
// import {getForms} from '../ducks/store'
import './Forms.css'



export class Forms extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state={
        centers: reduxState.centers,
        role: reduxState.role,
        forms: reduxState.forms
    }
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        centers: reduxState.centers,
        role: reduxState.role
      })
    })
  }

  // addForm = () => {
  //   const {}
  // }

  render() {
    const {role} = this.state
    const centerID = +this.props.match.params.id
    const [displayCenter] = this.state.centers.filter(center => centerID === center.center_id)
    console.log([displayCenter])
    if(!displayCenter){
      return <h1>loading</h1>
    }
    return (
      <div className='forms-title'>
        <h1>{displayCenter.center_name}</h1>
        <h1>Forms</h1>
        {
              role === 'director' &&
                <div>
                  <button onClick={()=> this.addForm()}>Add Form</button>
                </div>
            }

      </div>
    )
  }
}

export default Forms
