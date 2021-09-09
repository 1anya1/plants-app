import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import './Nav.scss'

import myData from './data/Homepage'

console.log(myData.Part1)
class Home extends React.Component{
    render() {
        return (
            <div id='main'>
                 <div className='cover'>
                     <h1 className='header'>
                         A Place To track and watch your plants grow
                    </h1>
                </div>
                <div className='intro'>
                    { myData.Part1.map((el, idx)=> <p key={idx}>{el}</p>)}
                    {myData.Header.map((el, idx)=><h2 key={idx}>{el}</h2>)}
                    { myData.Part2.map((el, idx)=> <p key={idx}>{el}</p>)}
                    <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    
                </div> 
            </div>
        )
    }

}

export default Home;

 