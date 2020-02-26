import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null,
      filter:'',
      
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this)
   
  }
  componentWillMount = () => {
    this.setState({
        cards: this.props.cards,
        

    })
  }
  handleChange = event => {
    console.log(this.handleChange)
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
        modal: card.id
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
      <div className="container">
        <input className = 'searchBar' placeholder='search' value={filter} onChange={this.handleChange} />
        <div className="row" style = {{maxWidth: 1600, justifyContent: 'center'}}>
        {filteredData.map((card, id) => (
          //  {this.props.cards.map((card,id) => (
            <div key={id} >
              <small>
                <div className="column">
                    <span className="text-center genus-name">
                        <img className = 'img' src={card.img} alt={card.name}></img>
                    </span>
                    <span>
                      <Button color="white" size="lg" onClick={this.toggle.bind(this, card)}>
                        <h3 className= 'plantName'>{card.name}</h3>
                      </Button>

                      <Modal isOpen={this.state.modal === card.id} toggle={this.toggle}>

                          <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>
                            <p className='plantName'> {card.name}</p>
                          </ModalHeader>

                            <ModalBody style={{color: 'gray'}}>
                              <img className='popUpCardPink' src={card.img} alt={card.name}/>
                              <p><b>Scientific Name: </b> <i>{card.scientificName}</i></p>
                              <p><b>Height: </b>{card.height}</p>
                              <p><b>Temperature: </b>{card.temperature}</p>
                              <p><b>Humidity: </b>{card.humidity}</p>
                              <p> <b>Bugs: </b>{card.bugs}</p>
                              <ul><b>Common Issues:</b>
                                {card.issues.map(item => (
                                  <li key={item} > <img src='https://i.imgur.com/vqgeRl4.png?2' alt={card.name}/> {item}</li>
                                        ))}
                                </ul>
                            </ModalBody>
                                
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggle} style={{backgroundColor: '#ff87b9', borderColor:'#ff87b9'}}>
                              Back to Plants
                          </Button>
                                
                        </ModalFooter>      
                      </Modal>
                    </span>
                  </div>
                  <br />    
               </small>
            </div>
            ))}
        </div> 
      </div>
    );
  }
}
export default Cards;