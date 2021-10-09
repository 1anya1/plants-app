import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './Home'
import Disease from './disease/Disease'
import Plants from './Plants/Plants'
import Pests from './pests/Pests'
import CareTips from './careTips/CareTips'
import Registration from './Registration'
import Login from './registrations/Login'
import Signup from './registrations/Signup'
import MyPlants  from './myPlants/MyPlants.js'
import AddNote from './myPlants/AddNote.js'
export default function MyRoutes(props) {
    return(
        <Router>
          <Link to='/diseases'/>
          <Link to='/plants'/>
          <Link to='/pests'/>
          <Link to='/care-tips'/>
          <Link to='/registration'/>
          <Link to='/login'/>
          <Link to='/signup'/>
          {props.isLoggedIn  && 
            <Link to='/my-plants/logs'/>
          } 
          {props.isLoggedIn  && 
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
          <Route exact path='/login'>
              <Login loggedInStatus={props.isLoggedIn} handleLogin={props.handleLogin} />
            </Route>
          <Route exact path='/signup' >
              <Signup loggedInStatus={props.isLoggedIn}  handleLogin={props.handleLogin}/>
          </Route>
          {props.isLoggedIn  && 
          <Route exact path='/my-plants/logs' >
             < AddNote userId={props.user_id} name={props.username}/>
            </Route>  
            }
           {props.isLoggedIn  && 
          <Route exact path='/my-plants'>
            < MyPlants  userId={props.user_id} name={props.username} plant_id={props.plant_id}/>
          </Route>
          }
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
        </Router> 
      
    )
  }

     {/* <Route exact path="/registration" render={props => (
              <Registration {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}>
          </Route> */}