import React from 'react'
import plantList from './plantList'
import './Plants.scss'
import Cards from "./Cards"
import CareTips from './CareTips'



class Plants extends React.Component {
    constructor(){
        super()
        this.state = {
            plants : plantList,
        }
    }
 
    render() {
        return (
                <div>
                    <header className=' cover plantsCover'>
                        <div className='title'>
                            <h1 className='header1'>HOUSE  </h1> 
                            <h1 className='header1'><i>PLANTS</i> </h1> 
                        </div>
                    </header>
                   
                        <div className='intro'>
                        <p>A couple of words on plants... Proper watering and lighting are the most important components of 
                    indoor plant care. Humidity and temperatures also play a role. The trick is to try to mimic the climate of the place 
                    that plant came from.</p>
                      <CareTips/>
                            
                            <p><b id='pink'style={{fontSize: 30}}>If</b> you’re caring for 
                                indoor plants for the first time, our ultimate guide will provide you with the necessary 
                                information to allow your green friends to thrive.</p> 
                        </div>          
                    <div className = 'allPlants'>
                                        <Cards cards={this.state.plants}/>
                    </div>       
                </div>
            )
        }
    }
    export default Plants
