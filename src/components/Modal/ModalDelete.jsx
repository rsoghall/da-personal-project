import React, { Component } from 'react'

export class ModalDelete extends Component {
    render() {
        const { title, children, confirmText="Save", cancelText="Cancel", onCancel, onConfirm } = this.props
        return (
          <div class="modal-blanket">
            <div class="modal-card">
              <h3>{title}</h3>
              <div class="modal-content">
                {children}
              </div>
              <div className='modal-footer'>
                  <button onClick={() => {onCancel()}}>
                      {cancelText}
                  </button>
                  <button onClick={() => {onConfirm()}}>
                      {confirmText}
                  </button>
              </div>
            </div>
          </div>
        );
      }
}

export default ModalDelete
