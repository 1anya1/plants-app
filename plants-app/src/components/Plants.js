import React from 'react'
import plantList from './plantList'
import './Plants.css'
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
                    <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
                    <div className = 'allPlants'>
                        {filteredData.map(item => (
                            <div className = 'plant' key={item.id}>
                                {/* <div className = 'plant'> */}
                                    <img className='cards' src={item.img} alt={item.name}/>
                                        <p><b>Common Name: </b>{item.name}</p>
                                        <p><b>Scientific Name: </b> <i>{item.scientificName}</i></p>
                                        <p><b>Height: </b>{item.height}</p>
                                        <p><b>Temperature: </b>{item.temperature}</p>
                                        <p><b>Humidity: </b>{item.humidity}</p>
                                        <p> <b>Bugs: </b>{item.bugs}</p>
                                        <ul><b>Common Issues:</b>
                                            {item.issues.map(item => (
                                                <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                        ))}
                                         </ul>
                                </div>
                            //  </div>
                        ))}
                 </div>
            </div>
            </div>
         
        )
    }

}

export default Plants