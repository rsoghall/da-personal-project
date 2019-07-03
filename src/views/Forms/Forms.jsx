import React, { Component } from "react";
import store from "../../ducks/store";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { getForms } from "../../ducks/store";
import S3upload from "../../components/S3/S3";
import "./Forms.css";

export class Forms extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      centers: reduxState.centers,
      forms: reduxState.forms,
      targetFormId: 0,
      role: reduxState.role,
      editFormName: "",
      targetFormNameReadOnly: "",
      editFormLink: "",
      modalEditOpen: false,
      modalDeleteOpen: false,
      modalMode: "create"
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      debugger
      this.setState({
        centers: reduxState.centers,
        forms: reduxState.forms,
        role: reduxState.role
      });
    });
  }

  editForms = forms => {
    this.setState({
      editFormName: forms.form_name,
      editFormLink: forms.form_link,
      targetFormId: forms.form_id,
      targetFormNameReadOnly: forms.form_name,
      modalEditOpen: true,
      modalMode: "edit"
    });
  };

  onCancelModal = () => {
    this.setState({
      editFormName: "",
      editFormLink: "",
      targetFormId: 0,
      targetFormNameReadOnly: "",
      modalEditOpen: false,
      modalAddOpen: false,
      modalDeleteOpen: false,
      modalMode: "create"
    });
  };
  onConfirmEdit = async () => {
    const { targetFormId, editFormName, editFormLink, modalMode } = this.state;
    if (modalMode === "edit") {
      try {
        const formsData = await axios.put(`/api/forms/${targetFormId}`, {
          formsName: editFormName,
          formsUrl: editFormLink
        });
        store.dispatch(getForms(formsData.data));
        this.onCancelEdit();
      } catch (error) {
        console.log({ error });
      }
    } else if (modalMode === "create") {
      try {
        const createForms = await axios.post("/api/forms", {
          formsName: editFormName,
          formLink: editFormLink
        });
        store.dispatch(getForms(createForms.data));
      } catch (error) {
        console.log({ error });
      }
    }
  };

  onConfirmAddForms = async () => {
    const { editFormName, editFormLink } = this.state;
    try {
      const addForms = await axios.post("/api/forms", {
        formName: editFormName,
        formLink: editFormLink,
        modalAddOpen: true,
        modalMode: "create"
      });
      store.dispatch(getForms(addForms.data));
      this.onCancelModal();
    } catch (error) {
      console.log({ error });
    }
  };

  onConfirmDelete = async () => {
    const { targetFormId } = this.state;
    try {
      const deleteForms = await axios.delete(`/api/forms/${targetFormId}`);
      store.dispatch(getForms(deleteForms.data));
      this.onCancelModal();
    } catch (error) {
      console.log({ error });
    }
  };

  openDeleteModal = (formId, formName) => {
    this.setState({
      modalDeleteOpen: true,
      targetFormId: formId,
      targetFormNameReadOnly: formName
    });
  };

  openAddModal = (formId, formName) => {
    this.setState({
      modalAddOpen: true,
      targetFormId: formId,
      targetFormNameReadOnly: formName
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLink = link => {
    this.setState({
      editFormLink: link
    });
  };

  render() {
    const centerID = +this.props.match.params.id;
    const {
      role,
      forms,
      centers,
      modalEditOpen,
      modalAddOpen,
      modalDeleteOpen
    } = this.state;
    const displayForms = forms
      .filter(forms => {
      return centerID === forms.center_id

    })
      .map(forms => (
        <div className="forms-container">
          <div className="forms-display">
            <h1>{forms.form_name}</h1>
            <a href={forms.form_link}>{forms.form_name}</a>
          </div>
          {role === "director" && (
            <div className="forms-buttons">
              <button onClick={() => this.editForms(forms)}>Edit</button>
              <button
                onClick={() =>
                  this.openDeleteModal(forms.form_id, forms.form_name)
                }
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ));
    const [displayCenter] = centers.filter(
      center => centerID === center.center_id
    );
    if (!displayCenter || !displayForms) {
      return <h1>loading</h1>;
    }

    const { editFormName, editFormLink, targetFormNameReadOnly } = this.state;
    return (
      <div className="forms-screenWrapper">
        <div className="forms-title">
          <h1> {displayCenter.center_name} Forms</h1>
        </div>
        {role === "director" && (
          <div>
            <button
              onClick={() => this.openAddModal(forms.form_id, forms.form_name)}
            >
              Add Forms
            </button>
          </div>
        )}
        <div className="forms-outerWrapper">
          <div className="forms-displayFormsWrapper">{displayForms}</div>

          {modalEditOpen && (
            <Modal onCancel={this.onCancelModal} onConfirm={this.onConfirmEdit}>
              <h3>{targetFormNameReadOnly}</h3>
              <input
                onChange={this.handleChange}
                type="text"
                value={editFormName}
                name="editFormName"
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editFormLink}
                name="editFormLink"
                placeholder="Form Link"
              />
            </Modal>
          )}
          {modalDeleteOpen && (
            <Modal
              onCancel={this.onCancelModal}
              onConfirm={this.onConfirmDelete}
              confirmText="Delete"
            >
              <h3>
                Are you sure you want to DELETE {targetFormNameReadOnly} ?
              </h3>
            </Modal>
          )}
          {modalAddOpen && (
            <Modal
              onCancel={this.onCancelModal}
              onConfirm={this.onConfirmAddForms}
            >
              <h3>{targetFormNameReadOnly}</h3>
              <input
                onChange={this.handleChange}
                type="text"
                value={editFormName}
                name="editFormName"
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="text"
                value={editFormLink}
                name="editFormLink"
                placeholder="Form Link"
              />
              <S3upload
                onUploadComplete={this.handleLink}
                filetype="application/pdf"
              />
            </Modal>
          )}
          {/* <div className = "forms-registration">
            <iframe
              title="online registration form"
              src="http://weblink.donorperfect.com/EzGoingChildcare_Registration"
              style={{
                border: 0,
                width: 1200,
                height: 800,
                frameborder: 0,
                scrolling: false
              }}/>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Forms;
