import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import './Nav.css'

class Home extends React.Component{
    render() {
        return (
            <div>
                 <header className='cover homePage'>
                     <div className='title'>
                        <h1 className='header1'>WELCOME TO</h1> 
                        <h1 className='header1' ><i>PLANTLY</i> </h1> 
                    </div>
                </header>
                <div className='intro home'>
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Sun</b>, water and soil are crucial to the life of 
                    house plants. Most plants you purchase will come with a quick reference guide. But do you really 
                    know what your plant needs?  </p>
                         <div className='imagesHome'>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                         </div>

                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Keeping</b> plants around the house isn’t as scary as you might think; you 
                    just need to know what they like in order to keep your indoor garden both happy and green. </p>
                        <div><img  className= "banner" src="https://i.imgur.com/ZVbCAnD.png"></img></div>
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Plantly</b> is a house plant app that has it all. 
                    Search common house plants, learn about plant care and gain understanding on how to identify deisease and common pests.</p>
                        <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Keep</b> track of your plants using our tracker. Add dates, notes,
                     and photos that you can always refer back to. </p>
                     <div><img  className= "banner" src="https://i.imgur.com/bjhSHYI.png"></img></div>
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>A</b> couple of words on plants... Proper watering and lighting are the most important components of 
                    indoor plant care. Humidity and temperatures also play a role. The trick is to try to mimic the climate of the place 
                    that plant came from.</p>
                        <div className='imagesHome'>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                         </div>
                </div> 
            </div>
        )
    }

}

export default Home;

 