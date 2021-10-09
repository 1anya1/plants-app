import React, {Component} from 'react'
import logo from './Images'


const links = [
    { href: '/', text: 'Home' },
    { href: '/plants', text: 'Plants' },
    { href: '/diseases', text: 'Disease' },
    { href: '/pests', text: 'Pests' },
    {href:'/care-tips', text: 'Care Tips'}
  ];
  const page = document.querySelector('main')
  
  const createNavItem = ({ href, text}) => (
    <a className='link' key={href} href={`http://localhost:3000${href}`}>{text}</a>
  );
class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    
    
    render(){
      // { this.state.isToggleOn ? page.classList.remove('noscroll') : page.classList.add('noscroll')}
        return(
          <nav className={this.props.navShow}>
          <a href='/' className='logo'> <logo.Logo /></a>
          <div className='menu' >
            {links.map(createNavItem)}
            { !this.props.isLoggedIn  && <>
              <a className='link' href='/signup'><button className='sign-up'>Sign Up</button></a>
              <a  className='link' href='/login'><button className='log-in'>Log In</button></a>
               </>
            }
            { this.props.isLoggedIn && <>
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
              { !this.props.isLoggedIn  && <>
              <div className='mobile-login'>
                <a className='link' href='/signup'><button className='sign-up'>Sign Up</button></a>
                <a  className='link' href='/login'><button className='log-in'>Log In</button></a>
              </div>
               </>
            }
            { this.props.isLoggedIn && <>
            <a className='link' href='/my-plants'> My Plants</a>
            <a className='link'  href='/' onClick={this.props.handleClickExit} >Log Out</a>
            </>
            }
              </div>
          </div>
        </nav>
            
        )
    }
}

export default Nav

