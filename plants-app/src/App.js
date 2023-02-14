import React, { Component, Suspense, lazy } from "react";
import axios from "axios";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Disease from "./components/disease/Disease";
// import Plants from "./components/Plants/Plants";
import Pests from "./components/pests/Pests";
import Footer from "./components/footer/Footer";
// import CareTips from "./components/careTips/CareTips";
import Login from "./components/registrations/Login";
// import Signup from "./components/registrations/Signup";
// import MyPlants from "./components/myPlants/MyPlants.js";
// import AddNote from "./components/myPlants/AddNote.js";
import logo from "./components/Images";

// const Home = lazy(() => import("./components/Home"));
const Disease = lazy(() => import("./components/disease/Disease"));
const Plants = lazy(() => import("./components/Plants/Plants"));
// const Pests = lazy(() => import(" ./components/pests/Pests"));
// const Footer = lazy(() => import(" ./components/footer/Footer"));
const CareTips = lazy(() => import("./components/careTips/CareTips"));
// const Login = lazy(() => import(" ./components/registrations/Login"));
const Signup = lazy(() => import("./components/registrations/Signup"));
const MyPlants = lazy(() => import("./components/myPlants/MyPlants.js"));
const AddNote = lazy(() => import("./components/myPlants/AddNote.js"));
const ManagePlants = lazy(() => import("./components/myPlants/ManagePlants"));

const links = [
  { href: "/", text: "Home" },
  { href: "/plants", text: "Plants" },
  { href: "/diseases", text: "Disease" },
  { href: "/pests", text: "Pests" },
  { href: "/care-tips", text: "Care Tips" },
];

const createNavItem = ({ href, text }) => (
  <Link key={href} className="link" to={{ pathname: href }}>
    {text}
  </Link>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      scrolling: "",
      navShow: null,
      isLoggedIn: false,
      user: {},
      user_id: null,
      username: null,
      plant_id: null,
      url: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.loginStatus();
    window.addEventListener("click", () => {
      this.setState({ url: window.location.pathname });
    });
    window.addEventListener("load", () => {
      this.setState({ url: window.location.pathname });
    });
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    if (this.state.isToggleOn) {
      document.body.classList.add("active-overlay");
    } else {
      document.body.classList.remove("active-overlay");
    }
  }
  handleScroll() {
    let currentScroll = window.scrollY;
    if (currentScroll < 50) {
      this.setState({
        navShow: null,
        scrolling: currentScroll,
      });
    } else if (this.state.scrolling > currentScroll) {
      this.setState({
        navShow: "show-nav",
        scrolling: currentScroll,
      });
    } else {
      if (this.state.scrolling < currentScroll) {
        this.setState({
          navShow: "hide-nav",
          scrolling: currentScroll,
        });
      }
    }
  }
  loginStatus = () => {
    axios
      .get("https://salty-peak-61296.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  handleLogin = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.data.user,
      user_id: response.data.user.id,
      username: response.data.user.username,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
      user_id: null,
    });
  };
  handleClickExit = (e) => {
    e.preventDefault();
    axios
      .delete("https://salty-peak-61296.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((response) => {
        this.handleLogout();
        this.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        {!this.state.isToggleOn && <div className="overlay"></div>}
        <nav className={this.state.navShow}>
          <Link
            className="logo"
            to={!this.state.isToggleOn ? null : { pathname: "/" }}
            style={!this.state.isToggleOn ? { opacity: 0.5 } : {}}
          >
            <logo.Logo />
          </Link>
          <div className="menu">
            {links.map(createNavItem)}
            {!this.state.isLoggedIn && (
              <>
                <Link className="link" to={{ pathname: "/signup" }}>
                  <button className="sign-up">Sign Up</button>
                </Link>
                <Link className="link " to={{ pathname: "/login" }}>
                  <button className="log-in">Log In</button>
                </Link>
              </>
            )}
            {this.state.isLoggedIn && (
              <>
                <Link className="link" to={{ pathname: "/my-plants" }}>
                  My Plants
                </Link>
                {/* <Link lassName='link' to= {{pathname:"/", state: {onClick: this.handleClickExit} }}>Log Out</Link>  */}
                <a className="link" href="/" onClick={this.handleClickExit}>
                  Log Out
                </a>
              </>
            )}
          </div>
          <div className="hamburger" onClick={this.handleClick}>
            <div className={this.state.isToggleOn ? "bars" : "bars active"}>
              <div className="bar one"></div>
              <div className="bar two"></div>
              <div className="bar three"></div>
            </div>
            <div
              className={
                this.state.isToggleOn
                  ? "collapse mobile-nav"
                  : "show mobile-nav"
              }
            >
              <div className="nav">
                {links.map(createNavItem)}
                {!this.state.isLoggedIn && (
                  <>
                    <div className="mobile-login">
                      <Link className="link" to={{ pathname: "/signup" }}>
                        <button className="sign-up">Sign Up</button>
                      </Link>
                      <Link className="link" to={{ pathname: "/login" }}>
                        <button className="log-in">Log In</button>
                      </Link>
                    </div>
                  </>
                )}
                {this.state.isLoggedIn && (
                  <>
                    <Link className="link" to={{ pathname: "/my-plants" }}>
                      My Plants
                    </Link>
                    {/* <Link lassName='link' to= {{pathname:"/", state: {onClick: this.handleClickExit} }}>Log Out</Link>  */}
                    <a className="link" href="/" onClick={this.handleClickExit}>
                      Log Out
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "space-between",
          }}
        >
          <div>
            <main className={`${this.state.url === "/" ? "homepage" : ""}`}>
              {!this.state.isToggleOn && <div id="overlay"></div>}
              <Suspense fallback={<div style={{ height: "90vh" }}></div>}>
                <Switch>
                  <Route path={"/diseases"} render={() => <Disease />} />
                  <Route path={"/plants"} render={() => <Plants />} />
                  <Route path={"/pests"} render={() => <Pests />} />
                  <Route path={"/care-tips"} render={() => <CareTips />} />
                  <Route
                    path={"/login"}
                    render={(props) => (
                      <Login
                        {...props}
                        handleLogin={this.handleLogin}
                        loggedInStatus={this.state.isLoggedIn}
                      />
                    )}
                  />
                  <Route
                    path={"/signup"}
                    render={(props) => (
                      <Signup
                        {...props}
                        handleLogin={this.handleLogin}
                        loggedInStatus={this.state.isLoggedIn}
                      />
                    )}
                  />
                  {this.state.isLoggedIn && (
                    <Route
                      path={"/my-plants/logs"}
                      render={(props) => (
                        <AddNote
                          {...props}
                          userId={this.state.user_id}
                          name={this.state.username}
                        />
                      )}
                    />
                  )}
                  {this.state.isLoggedIn && (
                    <Route
                      path={"/my-plants/manage"}
                      render={(props) => (
                        <ManagePlants
                          {...props}
                          userId={this.state.user_id}
                          name={this.state.username}
                        />
                      )}
                    />
                  )}
                  {this.state.isLoggedIn && (
                    <Route
                      path={"/my-plants"}
                      render={(props) => (
                        <MyPlants
                          {...props}
                          userId={this.state.user_id}
                          name={this.state.username}
                          plant_id={this.state.plant_id}
                        />
                      )}
                    />
                  )}
                  <Route
                    path={"/"}
                    render={() => (
                      <Home
                        isLoggedIn={this.state.isLoggedIn}
                        username={this.state.username}
                      />
                    )}
                  />
                </Switch>
              </Suspense>
            </main>
          </div>
          <Footer
            isLoggedIn={this.state.isLoggedIn}
            handleLogout={this.handleClickExit}
          />
        </div>
      </>
    );
  }
}

export default App;
