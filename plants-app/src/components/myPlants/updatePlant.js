import React, {Component} from 'react'
import axios from 'axios'
import './updatePlant.scss'
import { FaPlus, FaFileImage } from "react-icons/fa";
import {uploadFile} from 'react-s3'

const config = {
    bucketName: 'plantly-user-uploads',
    region: 'us-west-1',
    accessKeyId: 'AKIAZPFXNYTK5DVV5PGZ',
    secretAccessKey: process.env.REACT_APP_API_KEY
  }
class UpdatePlant extends Component {
    constructor(props){
        super(props)
        this.state={
            user_id : this.props.user_id,
            plant_id: this.props.plant_id,
            title: '',
            url: '',
            pastName: '',
            imageFile:''
       }
    }
    componentDidMount() {
        this.getData()
    }
    getData(){
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.state.user_id}/todos/${this.state.plant_id}/edit`)
        .then(response => {
                if(response.data){
                    console.log(response.data.url)
                    let urlSplit = response.data.url.split('/')
                    this.setState({
                        title: response.data.title,
                        imageFile: urlSplit[3],
                        pastName: response.data.title,
                        url: response.data.url
                       })
                } else{
                    console.log('error')
                }
       
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
           let url=this.state.url
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
          
           this.closeNote();
         };
         uploadImage=(e)=>{
            console.log('image upload is working')
            let name = e.target.files[0].name
            uploadFile(e.target.files[0], config)
            .then((data)=>{
              if(data.location !== ''){
                this.setState({
                  imageFile: name,
                  url: data.location,


                 })
                 
              }
            })
            .catch((err)=>{
              console.log(err)
            })
          }
        closeNote=()=>{
            this.props.closeNote()
        }
    render(){
        console.log(this.state.imageFile)
        return (
        <div id='update-plant' className={this.state.plant_id ==='' ? 'update-hide' : 'update-show' }>
            <form onSubmit={this.handleSubmit}  id='update-plant-form'>
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
                <label htmlFor="file-change" className={this.state.imageFile ? "custom-file-upload dark" : "custom-file-upload "}><FaFileImage />{this.state.imageFile}</label>
                <input type='file'  id='file-change' className="custom-file-input" onChange={this.uploadImage}/>
              </div>
                <button id='active' placeholder="submit" type="submit"> Update Plant</button>
                <button onClick={this.closeNote}>Cancel</button>
          </form>
          
        </div>
          
        )
    }
}
export default UpdatePlant;