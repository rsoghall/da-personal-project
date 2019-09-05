import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const {
      title,
      children,
      confirmText = "Save",
      cancelText = "Cancel",
      onCancel,
      onConfirm
    } = this.props;
    return (
      <div className="modal-blanket">
        <div className="modal-card">
          <h3>{title}</h3>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            <button
              onClick={() => {
                onCancel();
              }}
            >
              {cancelText}
            </button>
            <button
              onClick={() => {
                onConfirm();
              }}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
