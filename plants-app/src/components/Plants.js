import React from 'react'
import plantList from './plantList'
import './Plants.css'
import Popup from 'reactjs-popup'


class Plants extends React.Component {
    constructor(){
        super()
        this.state = {
            filter:'',
            plants : plantList
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
                    <h1 class='header'>HOUSE  </h1> 
                   <h1 class='header'><i>PLANTS</i> </h1> 
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
                                <div className = 'pop' key={item.id}>
                                      <div>
                                        <img className='cardsPink' src={item.img} alt={item.name}/>
                                        
                                      </div>
                                            <Popup trigger={<h2 className ='color'>{item.name}</h2>} 
                                              modal
                                              closeOnDocumentClick
                                            >
                                      
                                              {close => (
                                              <div className = 'modal' key={item.id}>
                                                  <img className='popUpCardPink' src={item.img} alt={item.name}/>
                                                  <p><b>Common Name: </b>{item.name}</p>
                                                  <p><b>Scientific Name: </b> <i>{item.scientificName}</i></p>
                                                  <p><b>Height: </b>{item.height}</p>
                                                  <p><b>Temperature: </b>{item.temperature}</p>
                                                  <p><b>Humidity: </b>{item.humidity}</p>
                                                  <p> <b>Bugs: </b>{item.bugs}</p>
                                                  <ul><b>Common Issues:</b>
                                                    <div><p></p></div>
                                                    {item.issues.map(item => (
                                                      <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                                    ))}
                                                  </ul>
                                                  <a className='close'
                                                    onClick={close}>
                                                      &times;
                                                    </a>
                                              </div> 
                                              )}
    
    
                                            </Popup>
                                        
                                    </div>
                                 ))}
                            </div>
                        </div>
                    </div>
             
            )
        }
    
    }
      
    
    export default Plants
//             <div>
//                 <header></header>
//                 <div>
//                     <h1>Look thorugh the library of plant and search for plants but their name to find how to take care of them </h1>
//                     <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
//                     <div className = 'allPlants'>
//                         {filteredData.map(item => (
//                             <div className = 'plant' key={item.id}>
//                                     <img className='cards' src={item.img} alt={item.name}/>
//                                         <h3>{item.name}</h3>
//                                         <p><b>Scientific Name: </b> <i>{item.scientificName}</i></p>
//                                         <p><b>Height: </b>{item.height}</p>
//                                         <p><b>Temperature: </b>{item.temperature}</p>
//                                         <p><b>Humidity: </b>{item.humidity}</p>
//                                         <p> <b>Bugs: </b>{item.bugs}</p>
//                                         <ul><b>Common Issues:</b>
//                                             <div><p></p></div>
//                                             {item.issues.map(item => (
//                                                 <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
//                                         ))}
//                                          </ul>
//                                 </div>
//                              ))}
//                         </div>
//                     </div>
//                 </div>
         
//         )
//     }

// }

// export default Plants



{/* <div className = 'plant' key={item.id}>
                                    <img className='cards' src={item.img} alt={item.name}/>
                                        <h3>{item.name}</h3>
                                        <p><b>Scientific Name: </b> <i>{item.scientificName}</i></p>
                                        <p><b>Height: </b>{item.height}</p>
                                        <p><b>Temperature: </b>{item.temperature}</p>
                                        <p><b>Humidity: </b>{item.humidity}</p>
                                        <p> <b>Bugs: </b>{item.bugs}</p>
                                        <ul><b>Common Issues:</b>
                                            <div><p></p></div>
                                            {item.issues.map(item => (
                                                <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                        ))}
                                         </ul>
                                </div> */}