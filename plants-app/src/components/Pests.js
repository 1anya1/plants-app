import React from 'react'
import pestList from './pestList'
import './Pests.scss'
import { FaPlus } from "react-icons/fa";


class Pests extends React.Component {
    constructor(){
        super()
        this.state = {
            cards: pestList,
            toggle: false,
            id: null
        }
        this.expand = this.expand.bind(this);
    }
    
    expand (item){
        console.log(item.id)
        this.setState({
            toggle: !this.state.toggle,
            id: this.state.id===null? item.id : null,
         });
    }
    render() {
    console.log(this.state.id)
    console.log(this.state.cards)
        return (
            <div className=' pestPage' >
                <header className='cover'> 
                    <div className='title'>
                        <h3>Pests</h3> 
                   </div>
                </header>

                {/* <div className='intro'>
                    <p> <b id='green'style={{fontSize: 30}}>Houseplants</b> can be troubled by small, 
                    unwelcomed guests. Here is a quick reference guide to help you to identify the signs of 
                    pest infestation and how to combat them.</p>
                    <p><b id='green'style={{fontSize: 30}}>The</b> best way to avoid pests is to keep your 
                    plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quote' id='green'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p> <b id='green'style={{fontSize: 30}}>In</b> addition these pests can also make their 
                    way into your home on new plants, so it is very important to inspect new plants prior to bringing them home. 
                    You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                </div>   */}

                    <div className='column intro' >
                                {this.state.cards.map(item => (
                            <div className = 'card' key={item.id}> 
                                 <div className='accordion' key={item.id} onClick={this.expand.bind(this, item)}> <h5>{item.name}</h5>< FaPlus/></div>
                              
                                    <div id='pest-card' className={this.state.id===item.id && this.state.toggle ? null: 'hidden'} >
                                        <div className='pest-id'> 
                                            <div className='img'><img className='image' src={item.img} alt={item.name}/></div>
                                            <h5>{item.name}</h5>
                                            <div className="subtitle2">Spot Them</div>
                                            <p>{item.findThem}</p>
                                            <div className="subtitle2">Treatment</div>
                                            <p>{item.treatment}</p>
                                        </div>
                                    </div> 
                                </div>
                             ))}
                        </div>
                    
                </div>
         
        )
    }

}
  

export default Pests

