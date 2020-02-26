import React from 'react'
import plantList from './plantList'
import './Plants.css'
import PageFive from "./Modal"
import Search from './Search'
// import MyFilteringComponent from './Authentication'



class Plants extends React.Component {
    constructor(){
        super()
        this.state = {
            filter:'',
            plants : plantList,
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
      };
   
    render() {
            const { filter, plants } = this.state;
            const lowercasedFilter = filter.toLowerCase();
            const filteredData = plants.filter(item => {
              return Object.keys(item).some(key =>
                typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
              );
            });
            
        return (
                <div>
                    <header className='plantsCover'>
                    <div className='headerTwo'>
                    <h1 className='header'>HOUSE  </h1> 
                   <h1 className='header'><i>PLANTS</i> </h1> 
                   </div>
                    </header>
                    <div className='background'>
                    <div className='intro'>
                    <p>Houseplants can be troubled by small, unwelcomed guests. Here is a quick reference guide to help you to identify the signs of pest infestation and how to combat them.</p>
                    <p>The best way to avoid pests is to keep your plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quotePink'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p>In addition these pests can also make their way into your home on new plants, so it is very important to inspect new plants prior to bringing them home</p>
                    <p>You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                    </div>
                    </div>
                     
                   
                <div className='mainPink'>
                        <h2 className= 'postHeaderPink'>Search House Plant</h2>
                            <p className='explanation'> Click on the name of the plant to learn more</p>
                        <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
                        <div className = 'allPlants'>
                        {filteredData.map(item => (
                                   <PageFive
                                     boxes={this.state.plants}
                                     cbIndexes={this.state.id}
                                    modals={this.state.modals}
                                   />
                        ))}
                                                  
                       
                                 
                                 
                               
                                 </div> 
              
              

                                   
                                 
                        </div>
                    </div>
             
            )
        }
    
    }
    export default Plants
