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
    
    render() {
        return (
          <footer>
            <div className='links intro'>
              <div className='page-links'>
                {links.map(createNavItem)}
              </div>
              <div className='login-links'>
                <a className='link' href='/login'>Log In</a>
                <a className='link' href='/signup'>Sign Up</a>
              </div>

            </div>
          </footer>
        )
         
        
    }
  
}

export default Footer