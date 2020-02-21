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
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/disease">Disease</Link>
          </div>
          <div>
            <Link to="/plants">Plants</Link>
          </div>
          <div>
            <Link to="/pests">Pests</Link>
          </div>
          <div>
            <Link to="/tracker">Plant Tracker</Link>
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
