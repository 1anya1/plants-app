import React, { Component } from 'react';
import axios from 'axios'

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.history.location.state.plant_id,
            notes: []
        }
    }
     componentDidMount(){
         this.handleNote()
     }
    handleNote=()=>{
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
        .then(response=>{
         console.log(response.data.todos)
         if(response.data){
             this.setState({
                 notes: response.data.todos
             })

         }
        })
        .catch(error => console.log('api errors:', error))
      }
    render(){
        console.log(this.props.userId)
        console.log(this.state.id)
        console.log(this.state.notes)
        return(
            <div>
                {this.state.notes.map((el, idx)=>{
                    if(el.id===this.state.id){
                        return(
                            <div>{el.plants}</div>
                        )
                        
                    }
                })}
            </div>
        )
    }

}
export default AddNote