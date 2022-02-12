import React from 'react'
import pestList from './pestList'
import './Pests.scss'
import { FaPlus } from "react-icons/fa";
import logo from '../Images.js'


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
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    expand (item){
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
        return (
            <>
            <div className="hero intro" id='pestPage' >
                <div className='content'>
                    <h2>Houseplants and unwelcomed guests</h2>
                    <div className='subtitle'>Identify the signs of 
                    pest infestation and prevent a outbreak.</div>
                </div>
                <div className='image'></div>
            </div>
            <div className=' pestPage' >

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
                                                <p className='text'>{item.findThem}</p>
                                                <div className="subtitle2">Treatment</div>
                                                <p className='text'>{item.treatment}</p>
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

