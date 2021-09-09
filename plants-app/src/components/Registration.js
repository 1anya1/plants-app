import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Registration = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:4000/logout', {withCredentials: true})
    .then(response => {
      console.log(response)
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

 return (
    
     <div>
       { !props.loggedInStatus  && <>
       <a href='/login'>Log In</a>
       <a href='/signup'>Sign Up</a>
      
       </>
       }
       { props.loggedInStatus && 
        <a href='/logout' onClick={handleClick} >Log Out</a>
       }
     </div>
   );
};
export default Registration;