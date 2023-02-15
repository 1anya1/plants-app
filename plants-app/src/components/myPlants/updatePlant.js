import React, { Component } from "react";
import axios from "axios";
import "./updatePlant.scss";
import { FaFileImage } from "react-icons/fa";
import { uploadFile } from "react-s3";
import { Buffer } from "buffer";

const config = {
  bucketName: "plantly-user-uploads",
  region: "us-west-1",
  accessKeyId: "AKIAZPFXNYTK3RIIDN43",
  secretAccessKey: process.env.REACT_APP_API_KEY,
};
class UpdatePlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      plant_id: this.props.plant_id,
      title: "",
      url: "",
      pastName: "",
      imageFile: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    axios
      .get(
        `https://salty-peak-61296.herokuapp.com/users/${this.state.user_id}/todos/${this.state.plant_id}/edit`
      )
      .then((response) => {
        if (response.data) {
          let urlSplit = response.data.url.split("/");
          this.setState({
            title: response.data.title,
            imageFile: urlSplit[3],
            pastName: response.data.title,
            url: response.data.url,
          });
        } else {
          console.log("error");
        }
      });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    let url = this.state.url;
    let todo = {
      title: title,
      url: url,
    };
    axios
      .put(
        `https://salty-peak-61296.herokuapp.com/users/${this.state.user_id}/todos/${this.state.plant_id}`,
        { todo }
      )
      .then((response) => {
        if (response) {
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));

    this.props.closeUpdate();
  };
  uploadImage = (e) => {
    let name = e.target.files[0].name;
    uploadFile(e.target.files[0], config)
      .then((data) => {
        if (data.location !== "") {
          this.setState({
            imageFile: name,
            url: data.location,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  closeUpdate = () => {
    this.props.closeUpdate();
  };
  render() {
    Buffer.from("anything", "base64");
    window.Buffer = window.Buffer || require("buffer").Buffer;
    return (
      <div
        id="update-plant"
        className={this.state.plant_id === "" ? "update-hide" : "update-show"}
      >
        <form onSubmit={this.handleSubmit} id="update-plant-form">
          <h4>Update Plant: {this.state.pastName}</h4>
          <div className="inputs">
            <div style={{ width: "100%" }}>
              <div className="overline">Plants Name:</div>
              <input
                placeholder="Name of the plant..."
                required="required"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="overline">Image Upload:</div>
              <div className="input">
                <label
                  htmlFor="file-change"
                  className="custom-file-upload dark"
                >
                  <div style={{display:'flex', flexDirection:'row', gap:'6px', overflow:'hidden'}}>
                    <FaFileImage  size={20} style={{minWidth:'20px', minHeight:'20px'}}/>
                    <p>{this.state.imageFile}</p>
                  </div>
                </label>

                <input
                  type="file"
                  id="file-change"
                  className="custom-file-input"
                  onChange={this.uploadImage}
                />
              </div>
            </div>
          </div>
          <div className="buttons">
            <button placeholder="submit" type="submit" className="button-large">
              Update Plant
            </button>
            <button onClick={this.closeUpdate} className="button-large">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default UpdatePlant;
