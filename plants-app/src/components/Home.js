import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import './Nav.scss'

import myData from './data/Homepage'

console.log(myData.Part1)
class Home extends React.Component{
    render() {
        return (
            <>
            <div className="hero intro" id='home' >
                <div className='content'>
                    <h2>keep your green friends healthy and happy</h2>
                    <div className='subtitle'>Explore guides and tools that keep plants triving. Sign up to track and watch your plants grow.</div>
                    <div class='buttons'>
                        <button id='one'>Log In</button>
                        <button id='two'>View Plants</button>
                    </div>
                 </div>
                <div className='image'></div>
            </div>
                <div className='intro'>
                    { myData.Part1.map((el, idx)=> <p key={idx}>{el}</p>)}
                    {myData.Header.map((el, idx)=><h2 key={idx}>{el}</h2>)}
                    { myData.Part2.map((el, idx)=> <p key={idx}>{el}</p>)}
                    <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    
                </div> 
            </>
        )
    }

}

export default Home;

 