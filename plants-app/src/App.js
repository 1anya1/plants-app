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
// import './index.scss';

const links = [
  { href: '/', text: 'Home' },
  { href: 'plants', text: 'Plants' },
  { href: 'diseases', text: 'Disease' },
  { href: 'pests', text: 'Pests' }
  
  
];

const createNavItem = ({ href, text}) => (
  <a className='link' key={href} href={href}>{text}</a>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      scrolling:'',
      navShow: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleScroll(e){
    let currentScroll = window.scrollY;
    if(currentScroll < 100){
      this.setState({
        navShow: null,
        scrolling: currentScroll
      })
    } else if(this.state.scrolling > currentScroll ){
      this.setState({
        navShow: 'show-nav',
        scrolling: currentScroll
      })
    } else{
      if(this.state.scrolling < currentScroll ){
        this.setState({
          navShow: 'hide-nav',
          scrolling: currentScroll
        })
    }
  }
}
 

  render() {
    console.log(this.state.isToggleOn)
    console.log(this.state.scrolling)
    console.log(this.state.navShow)
    return (
     
      <main className={this.state.isToggleOn ? null : 'noscroll' } onScroll={console.log('scrolling')}>
        <nav className={this.state.navShow}>
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

export default App
