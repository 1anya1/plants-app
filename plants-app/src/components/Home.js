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
                    {/* <div className='subtitle'>Explore guides and tools that keep plants triving.</div> */}
                 </div>
                 <div className='buttons'>
                        <button id='one'>Log In</button>
                        <button id='two'>View Plants</button>
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
                            <li className='subtitle'><logo.Checkmark/>learn about plant plants and their care needs </li>
                            <li className='subtitle'> <logo.Checkmark/>search common houseplants and filter by category </li>
                            <li className='subtitle'> <logo.Checkmark/>learn how to identify deisease and stop them at the tracks</li>
                            <li className='subtitle'> <logo.Checkmark/>learn how to identify housepests and </li>
                            <li className='subtitle'> <logo.Checkmark/>Sign up to track and watch your plants grow.</li>
                            <li className='subtitle'> <logo.Checkmark/> Learn tips and tricks that keep your plants thriving </li>
                        </ul>
                    </div>
                    <div className='cards'>
                        <a href='/plants'>
                        <div className='section'>
                            <logo.Leafblob/>
                            <h6>Discover</h6>
                        </div>
                        </a>
                        <a href='/pests'>
                        <div className='section'>
                            <logo.Bugblob/>
                            <h6>Identify</h6>
                        </div>
                        </a>
                        <a href='/login'>
                        <div className='section'>
                            <logo.Todoblob/>
                            <h6>Track</h6>
                        </div>
                        </a>
                        <a href='care-tips'>
                        <div className='section'>
                            <logo.Thrive/>
                            <h6>Thrive</h6>
                        </div>
                        </a>
                    </div>
                    
                    <h4 className='header'>Our plant library contains the most popular housepalnts.</h4>
                    <a href='/plants'><button className = 'home-button'>Discover House Plants</button></a>
                    <div className='subtitle'>Keep track of your plants using our tracker. Add dates, notes, and photos that you can always refer back to.</div>
                    <button className = 'home-button'><Link to="/login" className='buttonGreen'>Log In</Link></button>
  

                   
                  
                    
                </div> 
            </>
        )
    }

}

export default Home;

 