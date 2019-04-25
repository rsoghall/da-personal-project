import React, { Component } from "react";
import store from "../../ducks/store";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { getStaff } from "../../ducks/store";
import S3upload from '../../components/S3/S3'
import "./Staff.css";

export class Staff extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      centers: reduxState.centers,
      staff: reduxState.staff,
      targetStaffId: 0,
      role: reduxState.role,
      editStaffName: "",
      targetStaffNameReadOnly: "",
      editStaffUrl: "",
      editStaffInfo: "",
      modalEditOpen: false,
      modalDeleteOpen: false,
      modalMode: "create"
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        centers: reduxState.centers,
        staff: reduxState.staff,
        role: reduxState.role
      });
    });
  }

  editStaff = staff => {
    this.setState({
      editStaffName: staff.staff_name,
      editStaffUrl: staff.staff_url,
      editStaffInfo: staff.staff_info,
      targetStaffId: staff.staff_id,
      targetStaffNameReadOnly: staff.staff_name,
      modalEditOpen: true,
      modalMode: "edit"
    });
  };

  onCancelModal = () => {
    this.setState({
      editStaffName: "",
      editStaffUrl: "",
      editStaffInfo: "",
      targetStaffId: 0,
      targetStaffNameReadOnly: "",
      modalEditOpen: false,
      modalAddOpen: false,
      modalDeleteOpen: false,
      modalMode: "create"
    });
  };
  onConfirmEdit = async () => {
    const {
      targetStaffId,
      editStaffName,
      editStaffInfo,
      editStaffUrl,
      modalMode
    } = this.state;
    if (modalMode === "edit") {
      try {
        const staffData = await axios.put(`/api/staff/${targetStaffId}`, {
          staffName: editStaffName,
          staffInfo: editStaffInfo,
          staffUrl: editStaffUrl
        });
        store.dispatch(getStaff(staffData.data));
        this.onCancelEdit();
      } catch (error) {
        console.log({ error });
      }
    } else if (modalMode === "create") {
      try {
        const createStaff = await axios.post("/api/staff", {
          staffName: editStaffName,
          staffInfo: editStaffInfo,
          staffUrl: editStaffUrl
        });
        store.dispatch(getStaff(createStaff.data));
      } catch (error) {
        console.log({ error });
      }
    }
  };

  onConfirmAddStaff = async () => {
    const { editStaffName, editStaffInfo, editStaffUrl } = this.state;
    try {
      const addStaff = await axios.post("/api/staff", {
        staffName: editStaffName,
        staffInfo: editStaffInfo,
        staffUrl: editStaffUrl,
        modalAddOpen: true,
        modalMode: "create"
      });
      store.dispatch(getStaff(addStaff.data));
      this.onCancelModal()
    } catch (error) {
      console.log({ error });
    }
  };

  onConfirmDelete = async () => {
    const { targetStaffId } = this.state;
    try {
      const deleteStaff = await axios.delete(`/api/staff/${targetStaffId}`);
      store.dispatch(getStaff(deleteStaff.data));
      this.onCancelModal()
    } catch (error) {
      console.log({ error });
    }
  };

  openDeleteStaffModal = (staffId, staffName) => {
    this.setState({
      modalDeleteOpen: true,
      targetStaffId: staffId,
      targetStaffNameReadOnly: staffName
    })
  }

  openAddStaffModal = (staffId, staffName) => {
    this.setState({
      modalAddOpen: true,
      targetStaffId: staffId,
      targetStaffNameReadOnly: staffName
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUrl = (url) => {
    this.setState({
      editStaffUrl: url
    })
  }

  render() {
    const centerID = +this.props.match.params.id;
    const { role, staff, centers, modalEditOpen, modalAddOpen, modalDeleteOpen} = this.state;
    const displayStaff = staff
      .filter(staff => centerID === staff.center_id)
      .map(staff => (
        <div className="staff-container">
          <div className="staff-display">
          <h1>{staff.staff_name}</h1>
          <img src={staff.staff_url} alt={staff.staff_name} />
          <div className="staff-displayInfo">
              <h4>{staff.staff_info}</h4>
              </div>
          </div>
          {role === "director" && (
            <div className="staff-buttons">
              <button onClick={() => this.editStaff(staff)}>Edit</button>
              <button onClick={() => this.openDeleteStaffModal(staff.staff_id, staff.staff_name)}>Delete</button>
            </div>
          )}
        </div>
      ));
    const [displayCenter] = centers.filter(
      center => centerID === center.center_id
    );
    if (!displayCenter || !displayStaff) {
      return <h1>loading</h1>;
    }

    const {
      editStaffName,
      editStaffUrl,
      editStaffInfo,
      targetStaffNameReadOnly
    } = this.state;
    return (
      <div className="staff-screenWrapper">
        <h1> {displayCenter.center_name} Staff</h1>
        {role === "director" && (
          <div>
            <button onClick={() => this.openAddStaffModal(staff.staff_id, staff.staff_name)}>Add Staff</button>
          </div>
        )}
        <div className="staff-outerWrapper">
          <div className="staff-displayStaffWrapper">
            {displayStaff}
          </div>

          {modalEditOpen && (
            <Modal onCancel={this.onCancelModal} onConfirm={this.onConfirmEdit}>
              <h3>{targetStaffNameReadOnly}</h3>
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffName}
                name="editStaffName"
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffUrl}
                name="editStaffUrl"
                placeholder="Picture Url"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffInfo}
                name="editStaffInfo"
                placeholder="Info"
              />
            </Modal>
          )}
          {modalDeleteOpen && (
            <Modal onCancel={this.onCancelModal} onConfirm={this.onConfirmDelete} confirmText="Delete">
              <h3>Are you sure you want to DELETE {targetStaffNameReadOnly} ?</h3>
              
            </Modal>
          )}
          {modalAddOpen && (
            <Modal onCancel={this.onCancelModal} onConfirm={this.onConfirmAddStaff}>
              <h3>{targetStaffNameReadOnly}</h3>
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffName}
                name="editStaffName"
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffUrl}
                name="editStaffUrl"
                placeholder="Picture Url"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editStaffInfo}
                name="editStaffInfo"
                placeholder="Info"
              />
              <S3upload onUploadComplete={this.handleUrl}/>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default Staff;
