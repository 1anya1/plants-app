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
          <div className="section-homepage section-1">
           
              <div className="benefits">
                <ul>
                  <li className="subtitle">
                    Discover a wide variety of house plants and learn about
                    their care and needs
                  </li>
                  <li className="subtitle">
                    Keep track of your plants and know when it's time to care
                    for your green friend
                  </li>
                  <li className="subtitle">
                    Learn how to identify deisease and stop them at the tracks
                  </li>
                  <li className="subtitle">
                    Discover techniques and strategies to help your plants
                    flourish
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
          </div>
          <div className="section-homepage">
            <h3 className="header">
              Our plant library contains the most popular housepalnts.
            </h3>
            <div className="plants-cta">
              <div className="info">
                <p className='text'>
                Transform your green thumb dreams into a reality with our all-in-one app! Discover a wide variety of home plants and learn about their specific disease and care needs. No more guesswork – our app provides expert advice and guidance to keep your plants healthy and thriving. 
                </p>
                <Link to={{ pathname: "/plants" }}>
                  <button className="home-button button-large">Discover House Plants</button>
                </Link>
              </div>
              <div className="plants-image"></div>
            </div>
          </div>
          <div className="section-homepage">
            <div className="quote">
              No more guesswork – our app provides expert advice and guidance to
              keep your plants healthy and thriving.
            </div>
          </div>
          <h3 className="header">
            Manage and track your plants growth and progress.
          </h3>
          <div className="tracker-cta">
            <div className="info">
              <p className='text'>
                Keep track of your plants. Add dates, notes,
                and photos that you can always refer back to.Plus, with the ability to track your plants, you'll always know when 
                it's time to care for your green friend. Get ready to turn your home into a lush and vibrant oasis with the ultimate plant care companion.
              </p>
              {this.props.isLoggedIn ? (
                <Link to={{ pathname: "/my-plants" }}>
                  <button className="home-button button-large">
                    {this.props.username}'s Plants
                  </button>
                </Link>
              ) : (
                <Link to={{ pathname: "/login" }}>
                  <button className="home-button button-large">Log In</button>
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
