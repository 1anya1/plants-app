import React, { Component} from 'react';
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation} from "react-router-dom";
// import Home from './components/Home'
// import Disease from './components/disease/Disease'
// import Plants from './components/Plants/Plants'
// import Pests from './components/pests/Pests'
import Footer from './components/footer/Footer'
// import CareTips from './components/careTips/CareTips'
// import Registration from './components/Registration'
// import Login from './components/registrations/Login'
// import Signup from './components/registrations/Signup'
// import MyPlants  from './components/myPlants/MyPlants.js'
// import AddNote from './components/myPlants/AddNote.js'
import Nav from './components/Nav'
import MyRoutes from './components/Router'

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
  axios.get('https://salty-peak-61296.herokuapp.com/logged_in', {withCredentials: true})
  .then(response => {
    if (response.data.logged_in) {
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
  {console.log('handling logout')}
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
     
      <main className='main'>
        <Nav isLoggedIn={this.state.isLoggedIn} navShow={this.state.navShow} />
        <MyRoutes isLoggedIn={this.state.isLoggedIn} user_id={this.state.user_id} username={this.state.username} plant_id={this.state.plant_id} handleLogin={this.handleLogin} handleClickExit={this.handleClickExit}/>
        
        {/* <Router>
          <Link to='/diseases'/>
          <Link to='/plants'/>
          <Link to='/pests'/>
          <Link to='/care-tips'/>
          <Link to='/registration'/>
          <Link to='/login'/>
          <Link to='/signup'/>
          {this.state.isLoggedIn  && 
            <Link to='/my-plants/logs'/>
          } 
          {this.state.isLoggedIn  && 
            <Link to='/my-plants'/>
          } 
          <Link to='/'/>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/diseases">
            <Disease />
          </Route>
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route exact path="/pests">
            <Pests />
          </Route>
          <Route exact path="/pests">
            <Pests />
          </Route>
          <Route exact path="/care-tips">
            <CareTips />
          </Route>
          <Route exact path="/registration" render={props => (
              <Registration {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}>
          </Route>
          <Route exact path='/login' render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} />
          <Route exact path='/signup' render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )} />
          {this.state.isLoggedIn  && 
          <Route exact path='/my-plants/logs' render={props => (
             < AddNote {...props} userId={this.state.user_id} name={this.state.username}/>
              )} />
          }
           {this.state.isLoggedIn  && 
          <Route exact path='/my-plants' render={props => (
            < MyPlants {...props} userId={this.state.user_id} name={this.state.username} plant_id={this.state.plant_id}/>
              )} />
          }
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
        </Router>  */}
        <Footer />
      </main>
    );
  }
}


export default App
