import React from 'react'
import plantList from '../data/plantList'
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
                        
                    <div className = 'allPlants'>
                                        <Cards cards={this.state.plants}/>
                    </div>       
                </div>
            )
        }
    }
    export default Plants
