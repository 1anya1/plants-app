import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home'
import Disease from './components/Disease'
import Plants from './components/Plants'
import Pests from './components/Pests'
import Footer from './components/Footer'
import Tracker from './components/Tracker'


class App extends React.Component {
  render(){
  return (
    <React.Fragment>
    <Router>
      <div className = 'layout'>
        <div className='nav'>
        <img className='logo' src='https://i.imgur.com/ZcqvZ1m.png'></img>
        <div></div>
  
          <div className='link'>
            <Link className='navLink' to="/">Home</Link>
          </div>
          <div className='link'>
            <Link className='navLink' to="/disease">Disease</Link>
          </div>
          <div className='link'>
            <Link className='navLink' to="/plants">Plants</Link>
          </div>
          <div className='link'>
            <Link className='navLink' to="/pests">Pests</Link>
          </div>
          <div className='link'>
            <Link className='navLink' to="/tracker">Plant Tracker</Link>
          </div>

        </div>
        

        <Switch>
          <Route path="/disease">
            <Disease />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/pests">
            <Pests />
          </Route>
          <Route path="/tracker">
            <Tracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
  </React.Fragment>

  )
}
}



export default App;
