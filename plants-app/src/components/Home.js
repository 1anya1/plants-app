import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import './Nav.scss'
import logo from './Images'

import myData from './data/Homepage'

console.log(myData.Part1)
class Home extends React.Component{
    render() {
        return (
            <>
            <div className="hero intro" id='home' >
                <div className='content'>
                    <h2>keep your green friends healthy and happy</h2>
                    <div className='subtitle'>Explore guides and tools that keep plants triving.</div>
                    <div class='buttons'>
                        <button id='one'>Log In</button>
                        <button id='two'>View Plants</button>
                    </div>
                 </div>
                <div className='image'></div>
            </div>
                <div className='intro home'>
                    {/* { myData.Part1.map((el, idx)=> <p key={idx}>{el}</p>)}
                    {myData.Header.map((el, idx)=><h2 key={idx}>{el}</h2>)}
                    { myData.Part2.map((el, idx)=> <p key={idx}>{el}</p>)} */}
                    < h4>Plantly is a house plant app that has it all. </h4>
                    <div className='benefits'>
                        <ul>
                            <li className='subtitle'><logo.Checkmark/>learn about plant care </li>
                            <li className='subtitle'> <logo.Checkmark/>search common houseplants </li>
                            <li className='subtitle'> <logo.Checkmark/>identify deisease and common pests</li>
                            <li className='subtitle'> <logo.Checkmark/>identify deisease and common pests</li>
                            <li className='subtitle'> <logo.Checkmark/>Sign up to track and watch your plants grow.</li>
                            <li className='subtitle'></li>
                        </ul>
                    </div>
                    <div className='cards'>
                        <div className='section'>
                            <logo.Leafblob/>
                            <h5>Discover</h5>
                        </div>
                        <div className='section'>
                            <logo.Bugblob/>
                            <h5>Identify</h5>
                        </div>
                        <div className='section'>
                            <logo.Todoblob/>
                            <h5>Track</h5>
                        </div>
                        <div className='section'>
                            <logo.Thrive/>
                            <h5>Thrive</h5>
                        </div>
                    </div>
                    
                    <h4>Our plant library contains the most popular housepalnts.</h4>
                    <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    <div className='subtitle'>Keep track of your plants using our tracker. Add dates, notes, and photos that you can always refer back to.</div>
                    <button className = 'home-button'><Link to="/login" className='buttonGreen'>Log In</Link></button>
  

                   
                  
                    
                </div> 
            </>
        )
    }

}

export default Home;

 