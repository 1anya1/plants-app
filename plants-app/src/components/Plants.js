import React from 'react'
import plantList from './plantList'
import PlantItem from './PlantItem'
import './Plants.css'
class Plants extends React.Component {
    constructor(){
        super()
        this.state = {
            plants : plantList
        }
    }
    render() {
        const plant = this.state.plants.map(plant => < PlantItem key={plant.id} plant = {plant} />)
        return (
            <div className = 'allPlants'>
                {plant}
            </div>
        )
    }

}

export default Plants