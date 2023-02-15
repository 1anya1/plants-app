import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./registration.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import logInImage from "../../img/lottie/login.json";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: "",
    };
    this.player = React.createRef(); // initialize your ref
  }
  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(
        "https://salty-peak-61296.herokuapp.com/login",
        { user },
        { withCredentials: true }
      )

      .then((response) => {
        console.log(response)
        if (response.data.logged_in) {
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
    this.props.history.push("/my-plants");
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
    const { username, password } = this.state;
    return (
      <div className=" intro">
    

        <div className="registration">
          <Player
            ref={this.player}
            autoplay={true}
            loop={true}
            controls={false}
            src={logInImage}
            className="lottie-login"
          ></Player>
          <div className='form-container'>
            <h4>Welcome Back!</h4>
            <div >
              <form onSubmit={this.handleSubmit} className="form">
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button placeholder="submit" type="submit" className='submit button-large'>
                  Log In
                </button>
                <div>
                  or <Link to="/signup"> sign up</Link>
                </div>
              </form>
            </div>
            <div>{this.state.errors ? this.handleErrors() : null}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
