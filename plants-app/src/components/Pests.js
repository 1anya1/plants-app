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
                <header className='cover pestPage '> 
                    <div className='title'>
                        <h1 class='header1'>PLANT  </h1> 
                   <    h1 class='header1'><i>PESTS</i> </h1> 
                   </div>
                </header>

                <div className='intro'>
                    <p> <b id='green'style={{fontSize: 30}}>Houseplants</b> can be troubled by small, 
                    unwelcomed guests. Here is a quick reference guide to help you to identify the signs of 
                    pest infestation and how to combat them.</p>
                    <p><b id='green'style={{fontSize: 30}}>The</b> best way to avoid pests is to keep your 
                    plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quote' id='green'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p> <b id='green'style={{fontSize: 30}}>In</b> addition these pests can also make their 
                    way into your home on new plants, so it is very important to inspect new plants prior to bringing them home. 
                    You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                </div>  

                    <div className='backgroundColor' id='lightGreen'>
                        <h2 className= 'header2' id='green'>Common House Plant Pests</h2>
                            <div className = 'rowLayout'>
                                {filteredData.map(item => (
                            <div className = 'cardItem' key={item.id}>
                                    <img className='cards' src={item.img} alt={item.name}/>
                                        <h1 className = 'itemName'id='green'>{item.name}</h1>
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

