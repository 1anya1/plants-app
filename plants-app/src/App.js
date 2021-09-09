import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home'
import Disease from './components/Disease'
import Plants from './components/Plants/Plants'
import Pests from './components/Pests'
import Footer from './components/Footer'
import CareTips from './components/Plants/CareTips'
// import Tracker from './components/Tracker'
// import './index.scss';

import Registration from './components/Registration'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Form  from './components/Form'

import logo from './components/Logo'
const links = [
  { href: '/', text: 'Home' },
  { href: 'plants', text: 'Plants' },
  { href: 'diseases', text: 'Disease' },
  { href: 'pests', text: 'Pests' },
  {href:'care-tips', text: 'Care Tips'}
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
      isLoggedIn: false,
      user: {},
      user_id: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.loginStatus()
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
loginStatus = () => {
  axios.get('http://localhost:4000/logged_in', {withCredentials: true})
  .then(response => {
    if (response.data.logged_in) {
      this.handleLogin(response)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
}
handleLogin = (data) => {
  console.log(data)
  this.setState({
    isLoggedIn: true,
    user: data.user,
    user_id: data.data.user.id
  })
}
handleLogout = () => {
  this.setState({
  isLoggedIn: false,
  user: {},
  user_id: null
  })
}
 

  render() {
    console.log(this.state.isLoggedIn)
    console.log(this.state.user_id)
    
    return (
     
      <main className={this.state.isToggleOn ? null : 'noscroll' } onScroll={console.log('scrolling')}>
        <nav className={this.state.navShow}>
          <a href='/' className='logo'> <logo.Logo /></a>
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
          <Route path={'/disease'} render={()=> <Disease />}/>
          <Route path={'/plants'} render={()=> <Plants />}/>
          <Route path={'/pests'} render={()=> <Pests/>}/>
          <Route path={'/care-tips'} render={()=> <CareTips/>}/>
          <Route path={'/registration'} render={props => (
              <Registration {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}/>
          <Route path={'/login'} render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} />
          <Route path={'/signup'} render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} />
          {this.state.isLoggedIn  &&
            <Route path={'/form'} render={props => (
              <Form {...props} userId={this.state.user_id}/>
              )}/>
          } 
          <Route path={'/'} render={()=> <Home/>}/>
        </Switch>
        </Router>
        <Footer />
      </main>
    );
  }
}

export default App
