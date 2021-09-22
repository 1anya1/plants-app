import React from "react";
import SVG from '../Logo.js'
export default class Modal extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        this.props.handleClick(this.props.modal)
    }
  render() {
         if(this.props.modal !==null){
             return(
                <div className= "modal" > 
                    <div className='modal-card'>
                        <div className='image'>
                            <img className='popUpCardPink' loading='lazy' src={require('../../img/plants/'+ this.props.modal.img).default} alt={this.props.modal.name}/>
                        </div>
                        <div className = 'plant-info'>
                        <h5 className='itemName'> {this.props.modal.name}</h5>
                        <div className='plant-spec'>
                            <div className='subtitle2'>Scientific Name</div>
                            <div className='body italic'>{this.props.modal.scientificName}</div>
                            
                        </div>
                        <div className='plant-spec'>
                            <div className='subtitle2'>Height</div>
                            <div className='body'>{this.props.modal.height}</div>
                        </div>
                        <div className='plant-spec'>
                            <div className='subtitle2'>Temperature</div>
                            <div className='body'>{this.props.modal.temperature}</div> 
                        </div>
                        <div className='plant-spec'>
                            <div className='subtitle2'>Humidity</div>
                            <div className='body'>{this.props.modal.humidity}</div>
                        </div>
                        <div className='plant-spec'>
                            <div className='subtitle2'>Pests</div>
                            <div className='body'>{this.props.modal.bugs}</div>
                        </div>
                        <ul>Common Issues:
                             {this.props.modal.issues.map(item => (
                               <li key={item}>{item}</li>
                                   ))}
                        </ul>
                       <div className = 'highlights'>
                           {this.props.modal.petFriendly===true ? <SVG.Dog/> : null}
                           {this.props.modal.lowLight===true ? <SVG.Sun/>  : null}
                           {this.props.modal.hangingPlant===true ? <SVG.HangingPlant/>  : null}
                       </div>
                    </div>
                    <button onClick = {this.handleClick}>Back to Plant</button>
                    </div>
                </div>
             )
         } else{
             return <div className="modal hide"> </div>
         }

  }
}
