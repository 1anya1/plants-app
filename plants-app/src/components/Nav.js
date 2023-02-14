import React, { Component } from "react";
// import logo from "./Logo";

const links = [
  { href: "/", text: "Home" },
  { href: "/plants", text: "Plants" },
  { href: "/diseases", text: "Disease" },
  { href: "/pests", text: "Pests" },
  { href: "/care-tips", text: "Care Tips" },
];

const createNavItem = ({ href, text }) => (
  <a className="link" key={href} href={`http://localhost:3000${href}`}>
    {text}
  </a>
);
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      scrolling: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      document.body.classList.add("active-overlay");
    }
  }

  render() {
    return (
      <nav>
        <a
          href="/"
          className="logo"
          
        ></a>
        <div className="menu">{links.map(createNavItem)}</div>

        <div className="hamburger" onClick={this.handleClick}>
          <div className={this.state.isToggleOn ? "bars" : "bars active"}>
            <div className="bar one"></div>
            <div className="bar two"></div>
            <div className="bar three"></div>
          </div>
          <div
            className={
              this.state.isToggleOn ? "collapse mobile-nav" : "show mobile-nav"
            }
          >
            {links.map(createNavItem)}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
