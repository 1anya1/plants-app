import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
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
import Tracker from './components/Tracker'

const links = [
  { href: '/', text: 'Home' },
  { href: 'plants', text: 'Plants' },
  { href: 'diseases', text: 'Disease' },
  { href: 'pests', text: 'Pests' },
  { href: 'tracker', text: 'Tracker' },
  
  
];

const createNavItem = ({ href, text}) => (
  <NavItem>
    <NavLink href={href} className="text-info" style={{fontSize: 18, fontWeight: 'bold'}}>{text}</NavLink>
  </NavItem>
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar className="text-info" color="white" light expand="md">
          <NavbarBrand href="/"><img className='logo' style={{width: 200}} src='https://i.imgur.com/ZcqvZ1m.png'></img></NavbarBrand>
          <NavbarToggler  onClick={this.toggle} />
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
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
          <Route path="/tracker">
            <Tracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

// import React from 'react';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";


// import Home from './components/Home'
// import Disease from './components/Disease'
// import Plants from './components/Plants'
// import Pests from './components/Pests'
// import Footer from './components/Footer'
// import Tracker from './components/Tracker'


// class App extends React.Component {


//   render(){

//   return (
//     <React.Fragment>
//     <Router>
//       <div className = 'layout'>
//         <div className='nav'>
//         <img className='logo' src='https://i.imgur.com/ZcqvZ1m.png'></img>
//         <div></div>
  
//           <div className='link'>
//             <Link className='navLink' to="/">Home</Link>
//           </div>
//           <div className='link'>
//             <Link className='navLink' to="/diseases">Disease</Link>
//           </div>
//           <div className='link'>
//             <Link className='navLink' to="/plants">Plants</Link>
//           </div>
//           <div className='link'>
//             <Link className='navLink' to="/pests">Pests</Link>
//           </div>
//           <div className='link'>
//             <Link className='navLink' to="/tracker">Plant Tracker</Link>
//           </div>

//         </div>
        

        // <Switch>
        //   <Route path="/diseases">
        //     <Disease />
        //   </Route>
        //   <Route path="/plants">
        //     <Plants />
        //   </Route>
        //   <Route path="/pests">
        //     <Pests />
        //   </Route>
        //   <Route path="/tracker">
        //     <Tracker />
        //   </Route>
        //   <Route path="/">
        //     <Home />
        //   </Route>
        // </Switch>
//       </div>
//     </Router>
//     <Footer />
//   </React.Fragment>

//   )
// }
// }



// export default App;