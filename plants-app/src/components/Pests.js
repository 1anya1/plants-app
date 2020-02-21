import React from 'react'
import pestList from './pestList'
import './Pests.css'

class Pests extends React.Component {
    constructor(){
        super()
        this.state = {
            filter:'',
            pests : pestList
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
      };
    render() {
        const { filter, pests } = this.state;
            const lowercasedFilter = filter.toLowerCase();
            const filteredData = pests.filter(item => {
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
                    <div className = 'allPests'>
                        {filteredData.map(item => (
                            <div className = 'pest' key={item.id}>
                                    <img className='cards' src={item.img} alt={item.name}/>
                                        <p><b>Name: </b>{item.name}</p>
                                        <p><b>Spot Them: </b> {item.findThem}</p>
                                        <p><b>Treatment: </b>{item.treatment}</p>
                                </div>
                             ))}
                        </div>
                    </div>
                </div>
         
        )
    }

}
  

export default Pests

