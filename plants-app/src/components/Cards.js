
import React, { Component } from 'react';
import Modal from './Modal';




class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null,
      filter:'',
      cards:[],

     
      
    };
    this.toggle = this.toggle.bind(this);
    this.pageToggle = this.pageToggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  

   
  }
  componentDidMount = () => {
    this.setState({
        cards: this.props.cards,
        

    })
  }
  handleChange = event => {
    console.log(event.target.value)
    this.setState({ 
      filter: event.target.value,
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
  pageToggle() {
    console.log(this.filter)
      
  }
  render() {
    const { filter, cards } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = cards.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    console.log(document.querySelector('body'))
  
    
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
        

    return (
     
      <div className="container" >
        <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
        <div className="row">
          {myData}
        </div> 
   
          <Modal modal={this.state.modal}  handleClick={this.toggle}/>

      </div>
  
    
    );
  }
}
export default Cards;

     