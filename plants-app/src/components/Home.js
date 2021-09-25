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
                     <div className='square'>
                         <div className='home-image'>
                             <div className='img'></div>
                         </div>
                     </div>
                     <div className='header-content'>
                        <h3>track and watch your plants grow</h3>
                        <div className='subtitle'>This is the subtitle text. Add some content here that will make it easier for user to make a desicion to search plants and create an account</div>
                        <div class='buttons'>
                            <button id='one'>Log In</button>
                            <button id='two'>View Plants</button>
                        </div>

                     </div>
                     
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

 