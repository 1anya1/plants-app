import React from 'react'
import plantList from './plantList'
import './Plants.css'
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
                <div>
                    <header className=' cover plantsCover'>
                        <div className='title'>
                            <h1 className='header1'>HOUSE  </h1> 
                            <h1 className='header1'><i>PLANTS</i> </h1> 
                        </div>
                    </header>
                   
                        <div className='intro'>
                            <p><b id='pink'style={{fontSize: 30}}>Houseplants</b> or indoor plants are plants that grow indoors. 
                                Houseplants are popular because they are relatively easy to take care of, provide health benefits 
                                and can be used in a variety of indoor décor themes.</p>
                            <h3 className ='quote' id='pink'> "Plants provide health benefits 
                                and can be used in a variety of indoor décor themes."</h3>
                            
                            <p><b id='pink'style={{fontSize: 30}}>If</b> you’re caring for 
                                indoor plants for the first time, our ultimate guide will provide you with the necessary 
                                information to allow your green friends to thrive.</p> 
                        </div>          
                        <div className='backgroundColor' id='lightPink'>
                            <h2 className= 'header2' id='pink'>Search House Plant</h2>
                                <h3 className='header3'> Click on the name of the plant to learn more</h3>
                                    <div className = 'allPlants'>
                                        <Cards cards={this.state.plants}/>
                                    </div>        
                        </div>
                </div>
            )
        }
    }
    export default Plants
