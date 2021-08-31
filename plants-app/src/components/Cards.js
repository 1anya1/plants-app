
import React, { Component } from 'react';
import Modal from './Modal';




class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null,
      filter:'',
      option:'',
      cards:[],
      defaultValue: '',


     
      
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this)

  

   
  }
  componentDidMount = () => {
    this.setState({
        cards: this.props.cards,
        defaultValue: 'allPlants',
    })
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ 
      filter: event.target.value,
      option: '',
      defaultValue: 'allPlants',
    
      
    });
  };
  
  handleOption = event => {
    console.log(event.target.value)
    this.setState({ 
      option: event.target.value,
      filter:'',
      defaultValue:event.target.value,

    });
  };



  toggle(card) {
    if(this.state.modal){
      this.setState({
        modal: null
      });
      document.body.style.overflow = "unset";
    } else{
      this.setState({
        modal: card
      });
      document.body.style.overflow = "hidden";
    }
      
  }

  render() {
    const { filter, cards, option, defaultValue } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = cards.filter(item => {
      return Object.keys(item).some(key =>{
        if(filter.length > 0){
          return typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter) 
        }
        else if (option.length>0){
          console.log(option)
          if(option==='allPlants'){
            return cards
          } else{
            return key===option && item[key]===true
          }
        }
        else{
          return cards
        }
        }
        
      );
    });
    console.log(filteredData)
    const myData = filteredData.map((card, id) => ( 
      <div className='card' key={card.name}>
          <div className="image">
            <img className = 'img'  height='300px' width='400px' loading='lazy' src={require('..//img/plants/' + card.img).default} alt={card.name}></img>
          </div>
          <h3>{card.name}</h3>
          <p>{card.scientificName}</p>
          <button onClick={this.toggle.bind(this, card)}>Learn More</button>
      </div>     
    ))
   const options =[
     {allPlants: 'All Plants'},
     {petFriendly: 'Pet Friendly Plants'},
     {lowLight: 'Low Light Plants'},
     {hangingPlant: 'Hanging Plants'}
   ]

    return (
     
      <div className="container" >
        <div className='search-bar'>
          <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
        </div>
        <div className='dropDown'>
          <select name="plants" id="plants" onChange={this.handleOption} value={this.state.defaultValue}>
            {options.map(opt=> Object.keys(opt).map((key, id)=> <option name={opt[key]} key={id} value={key} >{opt[key]}</option>))}
          </select>
        </div>
        <div className="row">
          {myData}
        </div> 
          <Modal modal={this.state.modal}  handleClick={this.toggle}/>
        </div>
  
    
    );
  }
}
export default Cards;

     