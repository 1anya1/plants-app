import React from 'react'
import pestList from './pestList'
import './Pests.scss'
import { FaPlus } from "react-icons/fa";
import logo from '../Logo.js'


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
        if(item.id===this.state.id){
            this.setState({
                toggle: !this.state.toggle,
                id: null
             });

        } 
        else if( this.state.id===null){
            this.setState({
                toggle: !this.state.toggle,
                id: item.id
            })
            

        }
        else{
            this.setState({
                id: item.id,
             });

        }
        
    }
    render() {
    console.log(this.state.id)
    console.log(this.state.cards)
        return (
            <>
            <div className="hero intro" id='pestPage' >
                <div className='content'>
                    <h2>Houseplants and unwelcomed guests</h2>
                    <div className='subtitle'>Identify the signs of 
                    pest infestation and how to combat a potential outbreak.</div>
                </div>
                <div className='image'></div>
            </div>
            <div className=' pestPage' >
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
                            <div className={this.state.id===item.id && this.state.toggle ? 'active card': 'card'} key={item.id}> 
                                 <div className='accordion' key={item.id} onClick={this.expand.bind(this, item)}> 
                                    <div className='title' >
                                        <h4 className={this.state.id===item.id && this.state.toggle ? 'translate':null}>{item.name}</h4>
                                        < FaPlus className={this.state.id===item.id && this.state.toggle ? 'open':null} />
                                    </div>
                              
                                    <div id='pest-card' className={this.state.id===item.id && this.state.toggle ? 'show': 'hidden'} >
                                            <div className='img'><logo.Outline/><img className='image' src={item.img} alt={item.name}/></div>
                                            <div className='content'>
                                  
                                                {/* <h5>{item.name}</h5> */}
                                                <div className="subtitle2">Spot Them</div>
                                                <p>{item.findThem}</p>
                                                <div className="subtitle2">Treatment</div>
                                                <p>{item.treatment}</p>
                                            </div>
                                            
                                    </div> 
                                    </div>
                                </div>
                             ))}
                        </div>
                    
                </div>
            </>
         
        )
    }

}
  

export default Pests

