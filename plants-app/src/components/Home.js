import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import "./Nav.scss";
import logo from "./Images";
import { Player } from "@lottiefiles/react-lottie-player";
import plantImage from "../img/lottie/plant.json";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }

  render() {
    return (
      <>
        <div className="hero intro " id="home">
          <div className="content">
            <h2>keep your green friends healthy and happy</h2>
            <h6>
              Elevate your plant care game. Join our community of plant lovers
              today!
            </h6>
          </div>

          {this.props.isLoggedIn ? (
            <Link className="cta-hero" to={{ pathname: "/my-plants" }}>
              <button id="one">Got To Plant Tracker</button>
            </Link>
          ) : (
            <Link to={{ pathname: "/login" }}>
              <button id="one">Start Tracking Today</button>
            </Link>
          )}
          <div className="lottie-background"></div>
          <Player
            ref={this.player}
            autoplay={true}
            loop={true}
            controls={false}
            src={plantImage}
            className="lottie-plant"
          ></Player>
        </div>
        <div className="intro home">
          <h3> Plantly is a house plant app that has it all. </h3>
          <div className="benefits">
            <ul>
              <li className="subtitle">
                <logo.Checkmark />
                learn about plant plants and their care needs{" "}
              </li>
              <li className="subtitle">
                {" "}
                <logo.Checkmark />
                search common houseplants and filter by category{" "}
              </li>
              <li className="subtitle">
                {" "}
                <logo.Checkmark />
                learn how to identify deisease and stop them at the tracks
              </li>
              <li className="subtitle">
                {" "}
                <logo.Checkmark />
                learn how to identify housepests and{" "}
              </li>
              <li className="subtitle">
                {" "}
                <logo.Checkmark />
                Sign up to track and watch your plants grow.
              </li>
              <li className="subtitle">
                {" "}
                <logo.Checkmark /> Learn tips and tricks that keep your plants
                thriving{" "}
              </li>
            </ul>
          </div>
          <div className="cards">
            <Link to={{ pathname: "/plants" }}>
              <div className="section">
                <logo.Leafblob />
                <h6>Discover</h6>
              </div>
            </Link>
            <Link to={{ pathname: "/pests" }}>
              <div className="section">
                <logo.Bugblob />
                <h6>Identify</h6>
              </div>
            </Link>
            <Link to={{ pathname: "/login" }}>
              <div className="section">
                <logo.Todoblob />
                <h6>Track</h6>
              </div>
            </Link>
            <Link to={{ pathname: "/care-tips" }}>
              <div className="section">
                <logo.Thrive />
                <h6>Thrive</h6>
              </div>
            </Link>
          </div>
          <h3 className="header">
            Our plant library contains the most popular housepalnts.
          </h3>
          <div className="plants-cta">
            <div className="info">
              <h5>
                Keeping plants around the house isn’t as scary as you might
                think; you just need to know what they like in order to keep
                your indoor garden both happy and greens
              </h5>
              <Link to={{ pathname: "/plants" }}>
                <button className="home-button">Discover House Plants</button>
              </Link>
            </div>
            <div className="plants-image"></div>
          </div>
          <div className="quote">
            "Plants provide health benefits and can be used in a variety of
            indoor décor themes."
          </div>
          <h3 className="header">
            Manage and track your plants growth and progress.
          </h3>
          <div className="tracker-cta">
            <div className="info">
              <h5>
                Keep track of your plants using our tracker. Add dates, notes,
                and photos that you can always refer back to.
              </h5>
              {this.props.isLoggedIn ? (
                <Link to={{ pathname: "/my-plants" }}>
                  <button className="home-button">
                    {this.props.username}'s Plants
                  </button>
                </Link>
              ) : (
                <Link to={{ pathname: "/login" }}>
                  <button className="home-button">Log In</button>
                </Link>
              )}
            </div>
            <div className="plants-image"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
