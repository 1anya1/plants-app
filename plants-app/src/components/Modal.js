import React, { Component } from "react";
import PropTypes from "prop-types";
import plantList from './plantList';
import './Plants.css'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PageFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      plants: plantList,
      filter:'',
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this)
    
  }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };


  toggle(box) {
    console.log(box);
    if(this.state.modal){
      this.setState({
        modal: null
      });
    } else{
      this.setState({
        modal: box.id
      });
    }
      
  }

  render() {
    const { filter, plants } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = plants.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key]=== 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    
    return (
      <div className="container">
       
        <div className="row" style = {{maxWidth: 1600, justifyContent: 'center'}}>
        
          {this.props.boxes.map((box,id, name) => (
            <div key={id} >
                      <small>
                      
                        <div className="column">

                         
                            <span className="text-center genus-name">
                              <img className = 'img' src={box.img}></img>
                              
                            </span>
                            
                              
                            <span>
                              <Button
                                color="white"
                                size="lg"
                                onClick={this.toggle.bind(this, box)}
                              >
                                <h3 className= 'plantName'>{box.name}</h3>
                              </Button>
                              <Modal
                                style={{ zIndex: 100987977 }}
                                isOpen={this.state.modal === box.id}
                                toggle={this.toggle}
                                className={this.props.className}
                              >
                                <ModalHeader
                                  toggle={this.toggle}
                                  cssModule={{'modal-title': 'w-100 text-center'}}
                                >
                                  <p className='plantName'> {box.name}</p>
                                </ModalHeader>
                                <ModalBody>
                              
                                
                                 <img className='popUpCardPink' src={box.img} alt={box.name}/>
                                                  
                                                  <p><b>Scientific Name: </b> <i>{box.scientificName}</i></p>
                                                  <p><b>Height: </b>{box.height}</p>
                                                  <p><b>Temperature: </b>{box.temperature}</p>
                                                  <p><b>Humidity: </b>{box.humidity}</p>
                                                  <p> <b>Bugs: </b>{box.bugs}</p>
                                                  <ul><b>Common Issues:</b>
                                                    <div><p></p></div>
                                                    {box.issues.map(item => (
                                                      <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                                    ))}
                                                  </ul>
                                           
                                </ModalBody>
                                <ModalFooter>
                                  <Button
                                    color="secondary"
                                    onClick={this.toggle}
                                  >
                                    Cancel
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

PageFive.propTypes = {
  boxes: PropTypes.array.isRequired
};

export default PageFive;