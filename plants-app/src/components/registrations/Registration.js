import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Login from './Login.js'
import Signup from './Signup.js'
import './registration.scss'

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let location = window.location.hash
        console.log(location==='#login')
        return(
            < div id='toggle'>
                <Signup  id='signup' />
                <Login  id='login'/>
    
            </ div>
        )
    }
}
export default Registration