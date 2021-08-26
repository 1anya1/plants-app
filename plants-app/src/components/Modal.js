import React from "react";
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
             console.log('lets return something')
             return(
                <div className={this.props.open ? "modal hide" : "modal"} > 
                     <h1 className='itemName'> {this.props.modal.name}</h1>
                     <div className = 'plant-info'>
                     <img className='popUpCardPink' src={this.props.modal.img} alt={this.props.modal.name}/>
                     <p><b>Scientific Name: </b> <i>{this.props.modal.scientificName}</i></p>
                             <p><b>Height: </b>{this.props.modal.height}</p>
                             <p><b>Temperature: </b>{this.props.modal.temperature}</p>
                             <p><b>Humidity: </b>{this.props.modal.humidity}</p>
                            <p> <b>Bugs: </b>{this.props.modal.bugs}</p>
                             <ul><b>Common Issues:</b>
                             {this.props.modal.issues.map(item => (
                               <li key={item} > <img src='https://i.imgur.com/vqgeRl4.png?2' alt={this.props.modal.name}/> {item}</li>
                                   ))}
                           </ul>
                           </div>
                           <button onClick = {this.handleClick}>Back to Plant</button>
                </div>
             )
         } else{
             return ( null)
         }

  }
}