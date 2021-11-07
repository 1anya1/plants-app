import React from 'react'
import './footer.scss'
import logo from '../Images'
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
    this.handleSubmit = this.handleSubmit.bind(this)
}
handleLogout(e){
    this.props.handleLogout(e)
}
handleSubmit(e){
  e.preventDefault();
  console.log(e.target.value)
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
      console.log(response.json())
			return response.json();
      
		}
		return Promise.reject(response);
	}).then(function (data) {
		console.log(data);
	}).catch(function (error) {
		console.warn(error);
	});
    e.target.reset();
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