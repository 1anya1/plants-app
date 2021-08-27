import React, { Component } from "react";
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
    } else{
      this.setState({
        modal: card
      });
    }
      
  }
  pageToggle() {
    console.log(this.filter)
      
  }
  render() {
    const { filter, cards } = this.state;
    const searchCard = cards;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = cards.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    console.log(filteredData.length)
    
      const myData = filteredData.map((card, id) => (
        
      <div className='card' key={card.name}>
          <div className="image">
            <img className = 'img' src={require(card.img)} alt={card.name}></img>
          </div>
          <button onClick={this.toggle.bind(this, card)}>{card.name}</button>
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

     