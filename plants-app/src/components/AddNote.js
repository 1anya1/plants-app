import React, { Component } from 'react';
import axios from 'axios'
import mySVG from './data/Svg.js'
import './AddNote.scss'

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.history.location.state.plant_id,
            notes: [],
            water: false, 
            fertilize: false,
            prune: false, 
            repot: false,
            comment: '',
            img: '', 
            date: '',
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
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };
      handleSubmit = async (event) => {
        event.preventDefault()
        const {water, fertilize, prune, repot, comment,img, date} = this.state
        let plant = {
            water: water, 
            fertilize: fertilize, 
            prune: prune, 
            repot: repot, 
            notes: comment, 
            img: img, 
            date: date
        }
        
        await axios.post(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.state.id}/plants`, {plant})
        
        .then(response => {
          if (response.data.logged_in) {
            this.props.handleLogin(response)
            this.redirect()
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
        this.setState({
            water: false, 
            fertilize: false,
            prune: false, 
            repot: false,
            comment: '',
            img: '', 
            date: '',

        })
        this.handleNote()
      };
    render(){
        console.log('this is the date' + this.state.date)
         
        return(
            <>
             <div className='cover'>
                     <h1 className='header'>
                        Welcome back,  {this.props.name}!
                    </h1>
                </div>
            <div className='notes'>
                {this.state.notes.map((el, idx)=>{
                    return(
                        <div className='note' key={`entry${idx}`}>
                            <div>{el.date}</div>    
                            {el.water===true && <mySVG.Watering />}
                            {el.fertilize===true && <mySVG.Fertilizer />}
                            {el.prune===true && <mySVG.Propagating />}
                            {el.repot && <mySVG.Repotting />}
                            <div>{el.notes}</div>                     
                        </div>

                    )
                })}

                
            </div>
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="date"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <div className='care-box'>
                <div className='care-type'>
                    <input
                        type="checkbox"
                        id="watered"
                        name="water"
                        onChange={this.handleInputChange}
                        checked={this.state.water}
                    />
                    <label className='option' htmlFor="watered"><mySVG.Watering className={this.state.water ? 'clicked' : null} /></label>
                </div>
                <div className='care-type'>
                    <input
                        type="checkbox"
                        id="fertilize"
                        name="fertilize"
                        onChange={this.handleInputChange}
                        checked={this.state.fertilize}
                    />
                    <label className='option'  htmlFor="fertilize" ><mySVG.Fertilizer className={this.state.fertilize ? 'clicked' : null}/></label>
                    
                </div>
                 <div className='care-type'>
                    <input
                        type="checkbox"
                        id="prune"
                        name="prune"
                        onChange={this.handleInputChange}
                        checked={this.state.prune}
                    /> 
                    <label className='option'  htmlFor="prune" ><mySVG.Propagating className={this.state.prune ? 'clicked' : null} /></label>
                </div>
                <div className='care-type'>
                    <input
                        type="checkbox"
                        id="repot"
                        name="repot"
                        onChange={this.handleInputChange}
                        checked={this.state.repot}
                    />
                    <label className='option'  htmlFor="repot" ><mySVG.Repotting className={this.state.repot ? 'clicked' : null} /></label>
                </div>
                </div>
                <textarea
                    placeholder='notes'
                    
                    name='comment'
                    value={this.state.comment}
                    rows="5" cols="33"
                    onChange={this.handleChange}
                />
        
          
          <button placeholder="submit" type="submit">
            Add Note
          </button>
        
          
          </form>
            </>
        )
    }

}
export default AddNote