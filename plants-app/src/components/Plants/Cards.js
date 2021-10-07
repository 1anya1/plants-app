
import React, { Component } from 'react';
import Modal from './Modal';
import {FaSistrix} from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


const nav = document.querySelector('nav')
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
      document.querySelector('nav').classList.add('show-nav')
      document.querySelector('nav').classList.remove('hide-nav')
    } else{
      this.setState({
        modal: card
      });
      document.body.style.overflow = "hidden";
      document.querySelector('nav').classList.remove('show-nav')
      document.querySelector('nav').classList.add('hide-nav')

      console.log(document.querySelector('nav'))
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
            <img className = 'img'   loading='lazy' src={require('../../img/plants/' + card.img).default} alt={card.name}></img>
          </div>
          <div className='plant-id'>
            <h5>{card.name}</h5>
            <div className='subtitle'>{card.scientificName}</div>
          </div>
          <button  className='button-bottom' onClick={this.toggle.bind(this, card)}>Learn More</button>
          
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
      <>
     
        <div className='search-menu'>
            <h4>Search Plants</h4>
               <div className='dropDown'>
                <select name="plants" id="plants" onChange={this.handleOption}> 
                    <option value="" disabled selected>All Plants</option>
                   {options.map(opt=> Object.keys(opt).map((key, id)=> <option name={opt[key]} key={id} value={key} >{opt[key]}</option>))}
                </select>
                <FaCaretDown />
             </div>
             <div className='search-bar'>
               <input className='searchBar'  placeholder='Search...' value={filter} onChange={this.handleChange} />
               <FaSistrix />
             </div>
             </div>
        <div className="row intro">
        {myData}
        <Modal modal={this.state.modal}  handleClick={this.toggle}/>
      </div> 
      </>
  
    
    );
  }
}
export default Cards;

     
