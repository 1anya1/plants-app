import React from 'react'
import './footer.scss'
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

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
}
handleLogout(e){
    this.props.handleLogout(e)
}

    
    render() {
      console.log(this.props.handleLogout)
        return (
          <footer>
            <div className='links intro'>
              <div className='page-links'>
                {links.map(createNavItem)}
              </div>
              <div className='login-links'>
                {this.props.isLoggedIn ? 
                <>
                  <a className='link' href='/my-plants'>My Plants</a>
                  <a className='link' href='/' onClick={this.handleLogout}> Log Out</a>
                </> :
                <>
                  <a className='link' href='/login'>Log In</a>
                  <a className='link' href='/signup'>Sign Up</a>
                </>
                
              }
              </div>

            </div>
          </footer>
        )
         
        
    }
  
}

export default Footer