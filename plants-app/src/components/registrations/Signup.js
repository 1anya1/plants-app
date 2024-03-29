import React, { Component } from "react";
import axios from "axios";
import "./registration.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import logInImage from "../../img/lottie/login.json";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, password_confirmation } = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    axios
      .post(
        "https://salty-peak-61296.herokuapp.com/users",
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleLogin(response);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  redirect = () => {
    this.props.history.push("/");
  };
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };
  render() {
    const { username, email, password, password_confirmation } = this.state;
    return (
      <div className="intro">
        <div className="registration">
          <Player
            ref={this.player}
            autoplay={true}
            loop={true}
            controls={false}
            src={logInImage}
            className="lottie-login"
          ></Player>

          <div className="form-container">
            <h4>Create a free account today</h4>
            <form onSubmit={this.handleSubmit} className="form">
              <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <input
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <input
                placeholder="password confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
              />

              <button
                placeholder="submit"
                type="submit"
                className="button-large"
              >
                Sign Up
              </button>
            </form>
            <div>{this.state.errors ? this.handleErrors() : null}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
