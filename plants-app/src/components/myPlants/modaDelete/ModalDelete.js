import React, { Component } from "react";
import "./ModalDelete.scss";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.deleteRoute = this.deleteRoute.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }
  cancelDelete() {
    this.props.cancelDelete(this.props.delete);
  }
  deleteRoute() {
    this.props.deleteRoute(this.props.delete);
  }
  render() {
    return (
      <div className={this.props.delete ? " modal-show  modal" : "modal"}>
        <div className="delete-modal-contnet">
          <h5>Are you sure you want to delete this plant?</h5>

          <div className="confirm-delete">
            <button className="button-large" onClick={this.deleteRoute}>
              yes
            </button>
            <button className="button-large" onClick={this.cancelDelete}>
              no
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DeleteModal;
