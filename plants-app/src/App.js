import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home'
import Disease from './components/disease/Disease'
import Plants from './components/Plants/Plants'
import Pests from './components/pests/Pests'
import Footer from './components/footer/Footer'
import CareTips from './components/careTips/CareTips'
// import Login from './components/registrations/Login'
import Registration from './components/registrations/Registration'
// import Signup from './components/registrations/Signup'
import MyPlants  from './components/myPlants/MyPlants.js'
import AddNote from './components/myPlants/AddNote.js'
import logo from './components/Images'
const links = [
  { href: '/', text: 'Home' },
  { href: '/plants', text: 'Plants' },
  { href: '/diseases', text: 'Disease' },
  { href: '/pests', text: 'Pests' },
  {href:'/care-tips', text: 'Care Tips'}
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
      username: null,
      plant_id: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.loginStatus()
  }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

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
  axios.get('https://salty-peak-61296.herokuapp.com/logged_in', {withCredentials: true})
  .then(response => {
    console.log(response)
    if (response.data.logged_in) {
      console.log(response.data)
      this.handleLogin(response)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
}
handleLogin = (response) => {
  console.log(response)
  this.setState({
    isLoggedIn: true,
    user: response.data.user,
    user_id: response.data.user.id, 
    username: response.data.user.username
  })
}
handleLogout = () => {
  console.log('logged out')
  this.setState({
  isLoggedIn: false,
  user: {},
  user_id: null
  })
} 
handleClickExit = (e) => {
  e.preventDefault()
  axios.delete('https://salty-peak-61296.herokuapp.com/logout', {withCredentials: true})
  .then(response => {
    console.log(response)
    this.handleLogout()
    this.history.push('/')
  })
  .catch(error => console.log(error))
}

  render() {
    console.log(this.state.isLoggedIn)
    console.log(this.state.user_id)
    
    return (
     
      <main className={this.state.isToggleOn ? null : 'noscroll' } onScroll={console.log('scrolling')}>
        { !this.state.isToggleOn &&
        <div id='overlay'></div>
        }
        <nav className={this.state.navShow}>
          <a href='/' className='logo'> <logo.Logo /></a>
          <div className='menu' >
            {links.map(createNavItem)}
            { !this.state.isLoggedIn  && <>
              <a className='link' href='/registration#signup'><button className='sign-up'>Sign Up</button></a>
              <a  className='link' href='/registration#login'><button className='log-in'>Log In</button></a>
               </>
            }
            { this.state.isLoggedIn && <>
            <a className='link' href='/my-plants'> My Plants</a>
            <a className='link'  href='/' onClick={this.handleClickExit} >Log Out</a>
            </>
            }
         </div>
          <div className='hamburger' onClick={this.handleClick}>
            <div className={this.state.isToggleOn ? 'bars' : 'bars active' }>
              <div className='bar one'></div>
              <div className='bar two'></div>
              <div className='bar three'></div>
            </div>
            <div className={this.state.isToggleOn ? 'collapse mobile-nav' : 'show mobile-nav'}>
              {links.map(createNavItem)}
              { !this.state.isLoggedIn  && <>
              <div className='mobile-login'>
                <a className='link' href='/registration#signup'><button className='sign-up'>Sign Up</button></a>
                <a  className='link' href='/registration#login'><button className='log-in'>Log In</button></a>
              </div>
               </>
            }
            { this.state.isLoggedIn && <>
            <a className='link' href='/my-plants'> My Plants</a>
            <a className='link'  href='/' onClick={this.handleClickExit} >Log Out</a>
            </>
            }
              </div>
          </div>
        </nav>
        <Router>
        <Switch>
          <Route path={'/diseases'} render={()=> <Disease />}/>
          <Route path={'/plants'} render={()=> <Plants />}/>
          <Route path={'/pests'} render={()=> <Pests/>}/>
          <Route path={'/care-tips'} render={()=> <CareTips/>}/>
          <Route path={'/registration'} render={props => (
              <Registration {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}/>
          {/* <Route path={'/login'} render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} />
          <Route path={'/signup'} render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} /> */}
            {this.state.isLoggedIn  && 
            <Route path={'/my-plants/logs'} render={props => (
              < AddNote {...props} userId={this.state.user_id} name={this.state.username}/>
              )}/>
          } 
          {this.state.isLoggedIn  && 
            <Route path={'/my-plants'} render={props => (
              < MyPlants {...props} userId={this.state.user_id} name={this.state.username} plant_id={this.state.plant_id}/>
              )}/>
          } 
          <Route path={'/'} render={()=> <Home isLoggedIn={this.state.isLoggedIn} username={this.state.username} /> }/>
        </Switch>
        </Router>
        <Footer  isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleClickExit} />
      </main>
    );
  }
}

export default App
