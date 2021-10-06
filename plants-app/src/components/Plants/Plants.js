import React from 'react'
import plantList from '../data/plantList'
import './Plants.scss'
import Cards from "./Cards"




class Plants extends React.Component {
    constructor(){
        super()
        this.state = {
            plants : plantList,
        }
    }
 
    render() {
        return (
            <>
            <div className="hero intro"  id='plant-search'>
                <div className='content'>
                    <h2> Search Common Indoor Plants</h2>
                    <div className='subtitle'>Get to know what your green friends and keep your garden both happy and green.</div>
                </div>
                <div className='image'></div>
            </div>
            <div className = 'allPlants'>
                <Cards cards={this.state.plants}/>
            </div>       
            </>
            )
        }
    }
    export default Plants
