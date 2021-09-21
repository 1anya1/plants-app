
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
      
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this) 
  }
  componentDidMount = () => {
    this.setState({
        cards: this.props.cards,
        option: 'allPlants',
    })
  }
  handleChange = event => {
    this.setState({ 
      filter: event.target.value,
    });
  };
  
  handleOption = event => {
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
    const { filter, cards, option } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const optionChoice = cards.filter(item => {
      return Object.keys(item).some(key =>{
        if(option==='allPlants'){
          return cards
        } else {
          return key===option && item[key]===true
        }
      })
    });
    const filteredData = optionChoice.filter(item => {
      return Object.keys(item).some(key =>{
              return typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter) 
        } 
      );
    });
    const myData = filteredData.map((card, id) => ( 
      <div className='card' key={card.name}>
          <div className="image">
            <img className = 'img'  height='300px' width='400px' loading='lazy' src={require('../../img/plants/' + card.img).default} alt={card.name}></img>
          </div>
          <div className='plant-id'>
          <h3>{card.name}</h3>
          <p>{card.scientificName}</p>

          </div>
          <button onClick={this.toggle.bind(this, card)}>Learn More</button>
      </div>     
    ))
   const options =[
     {allPlants: 'All Plants'},
     {petFriendly: 'Pet Friendly Plants'},
     {lowLight: 'Low Light Plants'},
     {hangingPlant: 'Hanging Plants'}
   ]
   console.log(option)

    return (
     
      <div className="container intro" >
          <div className='search'>
            <div className='heading'>
              <h3 className= 'header2' id='pink'>Search Common House Plants</h3>
            </div>
            <div className='search-menu'>
               <div className='dropDown'>
                <select name="plants" id="plants" onChange={this.handleOption} value={this.state.defaultValue}>
                   {options.map(opt=> Object.keys(opt).map((key, id)=> <option name={opt[key]} key={id} value={key} >{opt[key]}</option>))}
                </select>
             </div>
             <div className='search-bar'>
               <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
             </div>
             </div>
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

     
