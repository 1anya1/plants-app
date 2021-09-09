import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Registration = (props) => {
  const handleClick = () => {
    axios.post('http://localhost:4000/logout', {withCredentials: true})
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
       <Link to='/login'>Log In</Link>
       <Link to='/signup'>Sign Up</Link>
       </>
       }
       { props.loggedInStatus ? 
         <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
         null
       }
     </div>
   );
};
export default Registration;