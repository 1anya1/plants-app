import React, {Component} from 'react'
import axios from 'axios'
import './updatePlant.scss'
import { FaPlus, FaFileImage } from "react-icons/fa";

class UpdatePlant extends Component {
    constructor(props){
        super(props)
        this.state={
            user_id : this.props.user_id,
            plant_id: this.props.plant_id,
            title: '',
            url: '',
            pastName: '',
            imageName: false,
       }
    }
    componentDidMount() {
        this.getData()
    }
    getData(){
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.state.user_id}/todos/${this.state.plant_id}/edit`)
        .then(response => {
                if(response.data){
                    console.log(response.data.url.split('/'))
                    let urlSplit = response.data.url.split('/')
                    this.setState({
                        title: response.data.title,
                        url: urlSplit[3],
                        pastName: response.data.title,
                       })
                } else{
                    console.log('error')
                }
       
          })
    
    }
    imageUpload=(e)=>{
        this.props.imageUpload(e);
        this.setState({
            imageName: this.props.imageName
        })
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

    
    handleSubmit = (event) => {
        event.preventDefault()
           const title = this.state.title
           let url;
           {this.state.imageName ? url = this.state.imageName : url=this.state.url}
        //    const url = this.state.url
           let todo = {
             title: title,
             url: url
           }
           axios.put(`https://salty-peak-61296.herokuapp.com/users/${this.state.user_id}/todos/${this.state.plant_id}`, {todo})
           .then(response => {
             if (response) {
               console.log('yay its been updated ')
             } else {
               this.setState({
                 errors: response.data.errors
               })
             }
           })
           .catch(error => console.log('api errors:', error))
          
           
         };
    render(){
        console.log(this.state.plant_id)
        console.log(this.state.title)
        console.log(this.props.imageName)
        return (
        <div id='update-plant' className={this.state.plant_id ==='' ? 'update-hide' : 'update-show' }>
            <form onSubmit={this.handleSubmit}  id='add-plant'>
                <h4>Update {this.state.pastName} Plant</h4>
                <div className='inputs'>
                <input
                  placeholder="Name of the plant..."
                  required="required"
                  type="text"
                  name="title"
                  value= {this.state.title}
                  onChange={this.handleChange}
                />
              <label htmlFor="file-upload" className={this.state.url ? "custom-file-upload dark" : "custom-file-upload "}><FaFileImage />{this.props.imageName ? this.props.imageName : this.state.url}</label>
              <input type='file' id='file-upload' className="custom-file-input" onChange={this.imageUpload}/>
              </div>
                <button id='active' placeholder="submit" type="submit"> Update Plant</button>
          </form>
        </div>
          
        )
    }
}
export default UpdatePlant;