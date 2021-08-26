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
    this.handleChange = this.handleChange.bind(this)
  

   
  }
  componentDidMount = () => {
    this.setState({
        cards: this.props.cards,
        

    })
  }
  handleChange = event => {
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

  render() {
    const { filter, cards } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = cards.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
     
      <div className="container" >
        <input className = 'searchBar' placeholder='search' value={filter} onChange={this.toggle} />
        <div className="row">
        {filteredData.map((card, id) => (
          <div className='card' key={card.name}>
              <div className="image">
                <img className = 'img' src={card.img} alt={card.name}></img>
              </div>
              <button onClick={this.toggle.bind(this, card)}>{card.name}</button>
            </div>     
            ))}
        </div> 
        <Modal modal={this.state.modal}  handleClick={this.toggle}/>
      </div>
  
    
    );
  }
}
export default Cards;

     