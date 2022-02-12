import React, {Component} from 'react'
import logo from './Logo'
import Registration from './Registration'
import {Link } from 'react-router-dom'

const links = [
    { href: '/', text: 'Home' },
    { href: '/plants', text: 'Plants' },
    { href: '/diseases', text: 'Disease' },
    { href: '/pests', text: 'Pests' },
    {href:'/care-tips', text: 'Care Tips'}
  ];
const origin = window.location.origin;

  const createNavItem = ({ href, text}) => (
    // <Link to={{href}}>(text)</Link>
    <a className='link' key={href} href={`http://localhost:3000${href}`}>{text}</a>
  );
class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          scrolling:'',
          navShow: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
    render(){
        return(
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
            
        )
    }
}

export default Nav

