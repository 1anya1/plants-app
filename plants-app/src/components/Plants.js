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
                    <header></header>
                    <div>
                        <h1>Look thorugh the library of plant and search for plants but their name to find how to take care of them </h1>
                        <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
                        <div className = 'allPlants'>
                            {filteredData.map(item => (
                                <div className = 'pop' key={item.id}>
                                      <div>
                                        <img className='cards' src={item.img} alt={item.name}/>
                                        
                                      </div>
                                            <Popup trigger={<button className = 'modalButton'><h2 className ='color'>{item.name}</h2></button>} 
                                              modal
                                              closeOnDocumentClick
                                            >
                                      
                                              {close => (
                                              <div className = 'modal' key={item.id}>
                                                  <img className='popUpCard' src={item.img} alt={item.name}/>
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