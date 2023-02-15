import UpdatePlant from "./updatePlant";
import React, { Component } from "react";
import "./ManagePlants.scss";
import { Link } from "react-router-dom";
import DeleteModal from "./modaDelete/ModalDelete";
import axios from "axios";

class ManagePlants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      update: false,
      imageName: "",
      user_id: this.props.location.state.user_id,
      plant_id: "",
      plants: [],
      id: "",
    };
  }
  componentDidMount() {
    this.handleData();
  }
  handleData() {
    axios
      .get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
      .then((response) => {
        if (response.data) {
          this.setState({
            plants: response.data.todos,
            user_id: this.props.userId,
          });
        } else {
          console.log("error");
        }
      });
  }
  cancelDelete = () => {
    this.setState({
      modal: false,
      id: "",
    });
    document.body.classList.remove("active-overlay");
    document.querySelector("nav").classList.add("show-nav");
    document.querySelector("nav").classList.remove("hide-nav");
  };
  deletePlant = (event) => {
    const id = event.target.value;
    this.setState({
      modal: true,
      id: id,
    });
    document.body.classList.add("active-overlay");
    document.querySelector("nav").classList.remove("show-nav");
    document.querySelector("nav").classList.add("hide-nav");
  };
  updatePlant = (event) => {
    const id = event.target.value;
    this.setState({
      id: id,
      update: true,
    });
    document.body.classList.add("active-overlay");
    document.querySelector("nav").classList.remove("show-nav");
    document.querySelector("nav").classList.add("hide-nav");
  };
  deleteRoute = () => {
    axios
      .delete(
        `https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.state.id}`
      )
      .then((response) => {
        if (response.status === 200) {
          this.handleData();
        }
      })
      .catch((error) => console.log("api errors:", error));
    this.setState({
      modal: false,
    });
    document.body.classList.remove("active-overlay");
    document.querySelector("nav").classList.add("show-nav");
    document.querySelector("nav").classList.remove("hide-nav");
  };
  closeUpdate = () => {
    this.setState({
      update: false,
    });
    this.handleData();
    document.body.classList.remove("active-overlay");
    document.querySelector("nav").classList.add("show-nav");
    document.querySelector("nav").classList.remove("hide-nav");
  };
  render() {
    return (
      <>
        {this.state.modal && (
          <DeleteModal
            delete={this.state.modal}
            deleteRoute={this.deleteRoute}
            cancelDelete={this.cancelDelete}
          />
        )}
        {this.state.update && (
          <UpdatePlant
            imageName={this.state.imageName}
            user_id={this.state.user_id}
            plant_id={this.state.id}
            closeUpdate={this.closeUpdate}
          />
        )}
        <div className="intro">
          <div className="all-plants" id="manage-plants">
            <h4 className="title">ManagePlants</h4>

            <div className="breadcrums">
              <Link
                to={{ pathname: "/my-plants" }}
                style={{ textTransform: "unset" }}
              >
                <p>My Plants</p>
              </Link>
              <p>{">"}</p>
              <p>Manage Plants</p>
            </div>

            <div className="plants-table " style={this.state.modal || this.state.update ? {zIndex:'-1'} : {zIndex:0}}>
              <table cellSpacing="0">
                <thead>
                  <tr>
                    <th>Plant's Name</th>
                    <th className="actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.plants.map((el) => (
                    <tr key={el.id}>
                      <td className="name cell">
                        <div className="plant-image">
                          <img src={el.url} alt="plant" />
                        </div>
                        <p>{el.title}</p>
                      </td>
                      <td className="cell">
                        <div className="buttons">
                          <button
                            className="button-small"
                            value={el.id}
                            onClick={this.deletePlant}
                          >
                            Delete
                          </button>
                          <button
                            className="button-small"
                            value={el.id}
                            onClick={this.updatePlant}
                          >
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {!this.state.plants.length && (
              <h6>You do not have any plants listed. </h6>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ManagePlants;
