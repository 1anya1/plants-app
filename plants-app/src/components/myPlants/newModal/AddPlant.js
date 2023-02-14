import React, { Component } from "react";
import axios from "axios";
import "./newNote.scss";
import { uploadFile } from "react-s3";
import { FaFileImage, FaTimesCircle } from "react-icons/fa";
import { Buffer } from "buffer";

const config = {
  bucketName: "plantly-user-uploads",
  region: "us-west-1",
  accessKeyId: "AKIAZPFXNYTK3RIIDN43",
  secretAccessKey: process.env.REACT_APP_API_KEY,
};

class NewPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      image_uploaded: false,
      id: "",
      imageName: false,
      addPlant: this.props.addPlant,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const url = this.state.url;
    let todo = {
      title: title,
      url: url,
    };
    axios
      .post(
        `https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos`,
        { todo }
      )
      .then((response) => {
        if (response.data.id) {
          this.props.handleData();
          this.props.deactivateModal();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
    this.setState({
      title: "",
      url: "",
      image_uploaded: false,
      imageName: false,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  imageUpload = (e) => {
    let name = e.target.files[0].name;
    uploadFile(e.target.files[0], config)
      .then((data) => {
        if (data.location !== "") {
          this.setState({
            url: data.location,
            image_uploaded: true,
            imageName: name,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const title = this.state.title;
    Buffer.from("anything", "base64");
    window.Buffer = window.Buffer || require("buffer").Buffer;
    return (
      <form onSubmit={this.handleSubmit} id="add-plant">
        <div className="form">
          <div className="heading">
            <h5>Add New Plant</h5>
            <FaTimesCircle
              size={20}
              fill="#16314f"
              onClick={this.props.deactivateModal}
            />
          </div>
          <div className="inputs">
            <input
              placeholder="Name of the plant..."
              required="required"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <label
              htmlFor="file-upload"
              className={
                this.state.imageName
                  ? "custom-file-upload dark"
                  : "custom-file-upload "
              }
            >
              <FaFileImage />
              {this.state.imageName ? this.state.imageName : "Upload Image..."}
            </label>
            <input
              type="file"
              id="file-upload"
              className="custom-file-input"
              required="required"
              onChange={this.imageUpload}
            />
          </div>
          {this.state.image_uploaded && (
            <button
              id="active"
              placeholder="submit"
              type="submit"
              className="button-large"
            >
              Add Plant
            </button>
          )}
          {!this.state.image_uploaded && (
            <button id="disabled" disabled className="button-large">
              Add Plant
            </button>
          )}
        </div>
      </form>
    );
  }
}
export default NewPlant;
