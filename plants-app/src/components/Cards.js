import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(card) {
    console.log(card);
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
    return (
      <div className="container">
        <div className="row" style = {{maxWidth: 1600, justifyContent: 'center'}}>
          {this.props.cards.map((card,id) => (
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

                      <Modal
                        style={{ zIndex: 100987977 }}
                        isOpen={this.state.modal === card.id}
                        toggle={this.toggle}
                        className={this.props.className}
                        >

                          <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>
                            <p className='plantName'> {card.name}</p>
                          </ModalHeader>

                            <ModalBody>
                              <img className='popUpCardPink' src={card.img} alt={card.name}/>
                              <p><b>Scientific Name: </b> <i>{card.scientificName}</i></p>
                              <p><b>Height: </b>{card.height}</p>
                              <p><b>Temperature: </b>{card.temperature}</p>
                              <p><b>Humidity: </b>{card.humidity}</p>
                              <p> <b>Bugs: </b>{card.bugs}</p>
                              <ul><b>Common Issues:</b>
                                {card.issues.map(item => (
                                  <li key={item} alt={card.name}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                        ))}
                                </ul>
                            </ModalBody>
                                
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggle}>
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