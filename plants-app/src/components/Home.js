import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends React.Component{
    render() {
        return (
            <div>
                 <header className='cover homePage'>
                     <div className='title'>
                        <h1 className='header1'>WELCOME TO</h1> 
                        <h1 className='header1' ><i>PLANTLY</i> </h1> 
                    </div>
                        {/* <h4 className='header3'> One stop resource for plant care 💜</h4> */}
                </header>
                <div className='intro home'>
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Sun</b>, water and soil are crucial to the life of 
                    house plants. Most plants you purchase will come with a quick reference guide. But do you really 
                    know what your plant needs? </p>
                         <div className='imagesHome'>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                         </div>

                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Plantly</b> is a house plant app that has it all. 
                    Search common house plants, learn about their care, gain understanding on how to identify 
                    deisease and common pests.</p>
                        <div><img  className= "banner" src="https://i.imgur.com/ZVbCAnD.png"></img></div>
                        <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    
                    <p><b style={{color: '#0bbd86', fontSize: 30}}>Keep</b> track of your plants using our tracker. Add dates, notes, and photos that you can always refer back to. </p>
                    <p>You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                    <div><img  className= "banner" src="https://i.imgur.com/bjhSHYI.png"></img></div>
                    <button className = 'home-button'><Link to="/pests" className='buttonGreen'>Visit Plant Tracker</Link></button>
                   
                    <p>Here you can find your typical house plants and learn how to take care of them. Also you are 
                    able to check out common disease and pests that can harm your plants. 
                    </p>
                        <div className='imagesHome'>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                             <div> <img style={{height:50}} src='https://i.imgur.com/TS5uE6r.png'></img></div>
                         </div>
            
                    <p>Here you can find your typical house plants and learn how to take care of them. Also you are 
                    able to check out common disease and pests that can harm your plants. 
                    </p>
                </div> 
            </div>
        )
    }

}

export default Home;

 