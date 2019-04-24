import React, { Component } from 'react'
import store from '../ducks/store'
import ModalEdit from '../components/Modal/ModalEdit'
import axios from 'axios';
import {getStaff} from '../ducks/store'
import './Staff.css'

export class Staff extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state={
            centers: reduxState.centers,
            staff: reduxState.staff,
            editStaffId: 0,
            role: reduxState.role,
            editStaffName: '',
            editStaffNameReadOnly: '',
            editStaffUrl: '',
            editStaffInfo: '',
            modalOpen: false,
            modalMode: 'create'
        }
      }
      componentDidMount(){
        store.subscribe(() => { 
          const reduxState = store.getState()
          this.setState({
            centers: reduxState.centers,
            staff: reduxState.staff,
            role: reduxState.role
          })
        })
      }

      editStaff = (staff) => {
        this.setState({
            editStaffName: staff.staff_name,
            editStaffUrl: staff.staff_url,
            editStaffInfo: staff.staff_info,
            editStaffId: staff.staff_id,
            editStaffNameReadOnly: staff.staff_name,
            modalOpen: true,
            modalMode: 'edit'
        })
      }
      
      onCancelEdit =() => {
        this.setState({
          editStaffName: '',
          editStaffUrl: '',
          editStaffInfo: '',
          editStaffId: 0,
          editStaffNameReadOnly: '',
          modalOpen: false,
          modalMode: 'create'
        })
      }
      onConfirmEdit = async () => {
        const {editStaffId, editStaffName, editStaffInfo, editStaffUrl, modalMode} = this.state
        if(modalMode === 'edit'){
          try{
            const staffData = await axios.put(`/api/staff/${editStaffId}`,{staffName: editStaffName, staffInfo: editStaffInfo, staffUrl: editStaffUrl})
            store.dispatch(getStaff(staffData.data) )
            this.onCancelEdit()
          }catch(error){
            console.log({error})
          }
        } else if(modalMode === 'create') {
          try {
            const createStaff = await axios.post('/api/staff', {staffName: editStaffName, staffInfo: editStaffInfo, staffUrl: editStaffUrl})
            store.dispatch(getStaff(createStaff.data))
          }catch(error){
            console.log({error})
          }
        } 
      }

      addStaff = async () => {
        const {editStaffName, editStaffInfo, editStaffUrl} = this.state
        try {
          const addStaff = await axios.post('/api/staff', {staffName: editStaffName, staffInfo: editStaffInfo, staffUrl: editStaffUrl})
          store.dispatch(getStaff(addStaff.data))
        }catch(error){
          console.log({error})
        }
      }

      deleteStaff = async () => {
        const {editStaffId} = this.state
        try {
          const deleteStaff = await axios.delete(`/api/sttaff/${editStaffId}`)
          store.dispatch(getStaff(deleteStaff.data))
        }catch(error){
            console.log({error})
          }
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value

        })
      }
   
      render() {
        const centerID = +this.props.match.params.id
        const {role, staff, centers, modalOpen} = this.state
        const displayStaff = staff.filter(staff => centerID === staff.center_id).map(staff =>  (
          <div>
            <h1>{staff.staff_name}</h1>
            <img src={staff.staff_url} alt={staff.staff_name}/>
            <div className='staff-displayInfo'>
              <h4>{staff.staff_info}</h4>
            </div>
            {
              role === 'director' &&
                <div>
                  <button onClick={()=> this.editStaff(staff)}>Edit</button>
                  <button onClick={()=> this.deleteStaff(staff)}>Delete</button>
                </div>
            }
          </div>
        ))
        const [displayCenter] = centers.filter(center => centerID === center.center_id)
        if(!displayCenter || !displayStaff){
          return <h1>loading</h1>
        }
        
        const {editStaffName, editStaffUrl, editStaffInfo, editStaffNameReadOnly} = this.state
        return (
          <div>
            <h1> {displayCenter.center_name} Staff</h1>
            {
              role === 'director' &&
                <div>
                  <button onClick={()=> this.addStaff(staff)}>Add Staff</button>
                </div>
            }
              <div>
                {displayStaff}
                {
                  modalOpen &&
                  <ModalEdit onCancel={this.onCancelEdit} onConfirm={this.onConfirmEdit}>
                    <h3>{editStaffNameReadOnly}</h3>
                    <input onChange={this.handleChange} type="text" value={editStaffName} name="editStaffName"/>
                    <input onChange={this.handleChange} type="text" value={editStaffUrl} name="editStaffUrl"/>
                    <input onChange={this.handleChange} type="text" value={editStaffInfo} name="editStaffInfo"/>
                  </ModalEdit>
                }
              </div>
            
          </div>
        )
      }
    }

export default Staff


