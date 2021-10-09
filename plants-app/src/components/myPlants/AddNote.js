import React, { Component } from 'react';
import axios from 'axios'
import mySVG from '../data/Svg'
import './AddNote.scss'
// import logo from '../Images.js'
import DeleteModal from '../modaDelete/ModalDelete.js'
import NewNote from'../newNote/newNote.js'

class AddNote extends Component {
    constructor(props){
        super(props)
       console.log(this.props.location)
        this.state={
            id: this.props.history.location.state.plant_id,
            name: this.props.history.location.state.plant_name,
            image: this.props.history.location.state.plant_image,
            notes: [],
            modal: false,
            note_id: '',
            userId: this.props.userId,
            newNote: false,
        
        }
    }
     componentDidMount(){
         this.handleNote()
     }
    handleNote=()=>{
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
        .then(response=>{
         if(response.data){
             for(let i=0; i<response.data.todos.length; i++){
                 if(response.data.todos[i].id === this.state.id){
                     console.log(response.data.todos[i].plants)
                    this.setState({
                        notes: response.data.todos[i].plants
                    })
                 }
             }
        

         }
        })
        .catch(error => console.log('api errors:', error))
      }
      deleteNote=(id)=>{
          this.setState({
              modal: true,
              note_id: id
          })
          document.body.style.overflow = "hidden";
          
      }
      deleteRoute=async ()=>{
         await axios.delete(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.state.id}/plants/${this.state.note_id}`)
        .then(response => {
            if (response.data) {
                this.setState({
                    modal: false,
                    note_id: '',
                })   
                document.body.style.overflow = "unset";
            } else {
              this.setState({
                errors: response.data.errors
              })
            }
          })
          .catch(error => console.log('api errors:', error))
          this.handleNote();
      }
      cancelDelete=()=>{
        this.setState({
            modal: false,
            note_id: '',
        })  
        document.body.style.overflow = "unset";
      }
      newNote = () =>{
          this.setState({
              newNote: !this.state.newNote
          })
          document.querySelector('nav').classList.remove('show-nav')
          document.querySelector('nav').classList.add('hide-nav')
          document.body.style.overflow = "hidden";
      }
      closeNote = () => {
          this.setState({
              newNote: !this.state.newNote
          })
          document.querySelector('nav').classList.remove('hide-nav')
          document.querySelector('nav').classList.add('show-nav')
          document.body.style.overflow = "unset";
      }      
      
    render(){
        console.log(`new note ${this.state.newNote}`)
        console.log(`notes for ${this.state.image}`)
        let sortedNotes = this.state.notes.sort((a,b)=>{
            var c = new Date(a.date);
            var d = new Date(b.date);
            return d-c;
        });
         
        console.log(sortedNotes)
        return(
            <>
            <div className="hero intro" id='plant-logs' >
                <div className='content'>
                    <h2> Notes for {this.state.name}</h2>
                    <div className='subtitle'>All of your notes and progress</div>
                </div>
                <div className='image' ></div>
             </div>
            < div className='intro plant-logs'>
                <div className='links'>
                    <a href='/my-plants'>Back To {this.props.name}'s Plants</a>
                    <a onClick={this.newNote}> Add New Note</a>
                </div>
                <DeleteModal delete={this.state.modal} deleteRoute={this.deleteRoute} cancelDelete={this.cancelDelete} />
                <div className={this.state.newNote ? 'new-note show':' new-note hide'} >
                    <NewNote userId={this.state.userId} id={this.state.id} handleNote = {this.handleNote} newNote={this.state.newNote} exitNote={this.closeNote} />
                </div>
             
            <div className='notes'>
                {sortedNotes.map((el, idx)=>{
                    return(     
                        <div className='note' key={`entry${idx}`}>
                            <div className='overline'>{el.date}</div>    
                            <h4>Notes:</h4>
                            <div className='todos'>
                            {el.water===true && <mySVG.Watering  />}
                            {el.fertilize===true && <mySVG.Fertilizer />}
                            {el.prune===true && <mySVG.Propagating />}
                            {el.repot && <mySVG.Repotting />}
                            </div>
                            <p>{el.notes}</p>    
                            <button  className='button-bottom' onClick={() => this.deleteNote(el.id)}>Remove Note</button>       
                        </div>

                    )
                })}    
            </div>
            
            </div>
            </>
        )
    }

}
export default AddNote