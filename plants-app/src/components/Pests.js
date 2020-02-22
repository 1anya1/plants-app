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
                <header className='bugsCover'> 
                <div className='headerTwo'>
                   <h1 class='header'>PLANT  </h1> 
                   <h1 class='header'><i>PESTS</i> </h1> 
                   </div>
                   
                
                </header>
                <div className='background'>
                    <div className='intro'>
                    <p>Houseplants can be troubled by small, unwelcomed guests. Here is a quick reference guide to help you to identify the signs of pest infestation and how to combat them.</p>
                    <p>The best way to avoid pests is to keep your plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quote'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p>In addition these pests can also make their way into your home on new plants, so it is very important to inspect new plants prior to bringing them home</p>
                    <p>You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                    </div>
                     
                    <h2 className= 'postHeader'>Common House Plant Pests</h2>
                    <div className = 'allPests'>
                        {filteredData.map(item => (
                            <div className = 'pest' key={item.id}>
                                    <img className='cards' src={item.img} alt={item.name}/>
                                        <h1 className = 'title'>{item.name}</h1>
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

