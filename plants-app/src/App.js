import React, { Component } from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home'
import Disease from './components/Disease'
import Plants from './components/Plants'
import Pests from './components/Pests'
import Footer from './components/Footer'
// import Tracker from './components/Tracker'

const links = [
  { href: '/', text: 'Home' },
  { href: 'plants', text: 'Plants' },
  { href: 'diseases', text: 'Disease' },
  { href: 'pests', text: 'Pests' },
  { href: 'tracker', text: 'Tracker' },
  
  
];

const createNavItem = ({ href, text}) => (
  <a className='link' key={href} href={href}>{text}</a>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    console.log(this.state.isToggleOn)
    return (
     
      <main className={this.state.isToggleOn ? null : 'noscroll' }>
        <nav>
          <div className='logo'></div>
          <div className='menu' >
            {links.map(createNavItem)}
          </div>
          <div className='hamburger' onClick={this.handleClick}>
            <div className={this.state.isToggleOn ? 'bars' : 'bars active' }>
              <div className='bar one'></div>
              <div className='bar two'></div>
              <div className='bar three'></div>
            </div>
            <div className={this.state.isToggleOn ? 'collapse mobile-nav' : 'show mobile-nav'}>
              {links.map(createNavItem)}
              </div>
          </div>
        </nav>
        <Router>
        <Switch>
          <Route path="/diseases">
            <Disease />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/pests">
            <Pests />
          </Route>
          {/* <Route path="/tracker">
            <Tracker />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        <Footer />
      </main>
    );
  }
}

