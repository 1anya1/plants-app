import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends React.Component{
    render() {
        return (
            <div>
                 <header className='plantsCover' id="home">
                    <div className='header'>
                        <h1 class='header'>HOUSE  </h1> 
                        <h1 class='header'><i>PLANTS</i> </h1> 
                   </div>
                </header>
                <div className='intro'>
                    <p>Houseplants can be troubled by small, unwelcomed guests. Here is a quick reference guide to help you to identify the signs of pest infestation and how to combat them.</p>
                    <p>The best way to avoid pests is to keep your plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quote' id='purpleFont'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p>In addition these pests can also make their way into your home on new plants, so it is very important to inspect new plants prior to bringing them home</p>
                    <p>You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                </div>
               
                {/* <img src= 'https://cdn.vox-cdn.com/thumbor/Q5pJ4OuZrZGmXaakm44sZwTo1Cs=/0x0:4855x3237/1200x900/filters:focal(2046x2422:2822x3198)/cdn.vox-cdn.com/uploads/chorus_image/image/63279027/shutterstock_1140250127.0.jpg' alt='houseplants'></img> */}

                <p>Here you can find your typical house plants and learn how to take care of them. Also you are 
                    able to check out common disease and pests that can harm your plants. 
                </p>

                <h1>Click here to learn more about common problems with plants </h1>
                <button className = 'home-button'><Link to="/pests" className='pests'>Learn More About Pests and Common Plant Disease</Link></button>

                
            </div>
        )
    }

}

export default Home;