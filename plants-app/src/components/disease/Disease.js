import React from 'react'
import './Disease.scss'
import diseaseList from './diseaseList'
import { FaPlus } from "react-icons/fa";
import logo from '../Images.js'
class Disease extends React.Component {
    constructor(){
        super()
        this.state = {
        cards: diseaseList,
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
        console.log(this.state.disease)
        return(
            <>
            <div className="hero intro" id='diseasePage' >
                <div className='content'>
                    <h2>House Plant Disease</h2>
                    <div className='subtitle'>Overwatering is the number one killer of houseplants.</div>
                </div>
                    <div className='image'></div>
            </div>
            <div className='diseasePage'>
                <div className='column intro' >
                                {this.state.cards.map(item => (
                            <div className={this.state.id===item.id && this.state.toggle ? 'active card': 'card'} key={item.id}> 
                                 <div className='accordion' key={item.id} onClick={this.expand.bind(this, item)}> 
                                    <div className='title' >
                                        <h4 className={this.state.id===item.id && this.state.toggle ? 'translate':null}>{item.name}</h4>
                                        < FaPlus className={this.state.id===item.id && this.state.toggle ? 'open':null} />
                                    </div>
                              
                                    <div id='disease-card' className={this.state.id===item.id && this.state.toggle ? 'show': 'hidden'} >
                                            <div className='img'><logo.Outline/><img className='image' src={item.img} alt={item.name}/></div>
                                            <div className='content'>
                                  
                                                {/* <h5>{item.name}</h5> */}
                                                <div className="subtitle2">Identification</div>
                                                <p className='text'>{item.identification}</p>
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
        )}
}

export default Disease;