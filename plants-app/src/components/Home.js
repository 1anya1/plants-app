import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>This is my home page</h1>
                <img src= 'https://cdn.vox-cdn.com/thumbor/Q5pJ4OuZrZGmXaakm44sZwTo1Cs=/0x0:4855x3237/1200x900/filters:focal(2046x2422:2822x3198)/cdn.vox-cdn.com/uploads/chorus_image/image/63279027/shutterstock_1140250127.0.jpg' alt='houseplants'></img>

                <p>Here you can find your typical house plants and learn how to take care of them. Also you are 
                    able to check out common disease and pests that can harm your plants. 
                </p>

                <h1>Click here to learn more about common problems with plants </h1>
                <button><Link to="/pests">Learn More About Pests and Common Plant Disease</Link></button>

                
            </div>
        )
    }

}

export default Home;