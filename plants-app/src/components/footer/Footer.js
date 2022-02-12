import React from 'react'
import './footer.scss'
import logo from '../Images'
import {Link} from 'react-router-dom'
const links = [
    { href: '/', text: 'Home' },
    { href: '/plants', text: 'Plants' },
    { href: '/diseases', text: 'Disease' },
    { href: '/pests', text: 'Pests' },
    {href:'/care-tips', text: 'Care Tips'}
  ];
  
  const createNavItem = ({ href, text}) => (
    <Link className='link' key={href} to={{pathname: href}}>{text}</Link>
  );

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
handleLogout(e){
    this.props.handleLogout(e)
}
handleSubmit(e){
  e.preventDefault();
	fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSciDbFyUe4pagYagqgu1CQav8aLnTE-CQm7laSIfjEcem8ePg/formResponse', {
		method: 'POST',
    mode: 'no-cors', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*'
    },
		body: new FormData(e.target),
	}).then(function (response) {
		if (response.ok) {
			return response.json();
      
		}
		return Promise.reject(response);
	}).then(function (data) {
	}).catch(function (error) {
		console.warn(error);
	});
    e.target.reset();
}

    
    render() {
        return (
          <footer>
            <div className='links intro'>
              <div className='page-links'>
                {links.map(createNavItem)}
              </div>
              <div className='login-links'>
                {this.props.isLoggedIn ? 
                <>
                <Link className='link' to={{pathname: '/my-plants'}}>My Plants</Link>
                <a className='link'  href='/' onClick={this.handleLogout} >Log Out</a>
                </> :
                <>
                  <Link className='link' to={{pathname: '/login'}}>Log In</Link>
                  <Link className='link' to={{pathname: '/signup'}}>Sign Up</Link>
                </>  
              }
              </div>
              <form onSubmit={this.handleSubmit}>
                  <p className='overline'>Sign Up To Recieve Plant News And Updates </p>
                  <div className='form-inputs'>
                    <input name='entry.2083383586' type='email' placeholder='your email' required></input>
                    <button type='submit'>Submit</button>
                  </div>
                </form>

            </div>
            <div className='my-info'>
              <p>Made with love by Anna Filatova</p>
              <div className='links'>
                <a href='https://www.linkedin.com/in/anna-filatova/'><logo.Github /></a>
                <a href='https://github.com/1anya1'><logo.LinkedIn /></a>
                
              </div>
            </div>
          </footer>
        )
         
        
    }
  
}

export default Footer