import React from 'react'
import plantList from './plantList'
import './Plants.css'
import Popup from 'reactjs-popup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        button:'',
        plants : plantList
      }
      this.toggle = this.toggle.bind(this);
      this.id = this.id.bind(this);
      this.handleShow = this.handleShow.bind(this);
    }
  
    toggle() {
        this.setState({modal: !this.state.modal});
    }

    id = event => {
        this.setState({ button: event.target.value });
      }
      handleShow(id) {
        this.setState({show: id});
      }
  
render() {
    return (
        <div>
             <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader  toggle={this.toggle}>Header</ModalHeader>
                <ModalBody>
                <div>
                    {this.state.plants.map( item =>{
                        return (
                            <div key={item.id} >
                                {/* <img  src={item.img} alt={item.name}/> */}
                                                  <p><b>Common Name: </b>{item.name}</p>
                                                  <p><b>Scientific Name: </b> <i>{item.scientificName}</i></p>
                                                  <p><b>Height: </b>{item.height}</p>
                                                  <p><b>Temperature: </b>{item.temperature}</p>
                                                  <p><b>Humidity: </b>{item.humidity}</p>
                                                  <p> <b>Bugs: </b>{item.bugs}</p>
                                                  <ul><b>Common Issues:</b>
                                                    <div><p></p></div>
                                                    {item.issues.map(item => (
                                                      <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                                                    ))}
                                                  </ul>

                            </div>
                                                )
                    })}
               
                                          
               </div>       
    
                 </ModalBody>
                 <ModalFooter>
                   <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                   <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                 </ModalFooter>
               </Modal>
                
        </div>
    )
}
}
export default ModalP