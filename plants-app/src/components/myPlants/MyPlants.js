import React from 'react'
import axios from 'axios'
import './MyPlants.scss'
import {uploadFile} from 'react-s3'
import {Link} from 'react-router-dom'
import DeleteModal from '../modaDelete/ModalDelete'
import UpdatePlant from './updatePlant'
import { FaPlus, FaFileImage } from "react-icons/fa";

const config = {
  bucketName: 'plantly-user-uploads',
  region: 'us-west-1',
  accessKeyId: 'AKIAZPFXNYTK5DVV5PGZ',
  secretAccessKey: process.env.REACT_APP_API_KEY
}

class MyPlants extends React.Component {
    constructor(props){
        super(props)
        this.state={
            plants:[],
            title:'',
            url: '',
            image_uploaded: false,
            user_id: null,
            modal: false,
            id: '',
            toggle: false,
            imageName: false,
            update: false,
        }
        this.handleData = this.handleData.bind(this)
    }
    componentDidMount() {
        this.handleData()
    }
    handleData(){
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
        .then(response => {
                if(response.data){
                    this.setState({
                        plants: response.data.todos,
                        user_id: this.props.userId
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
        const url = this.state.url
        let todo = {
          title: title,
          url: url
        }
        axios.post(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos`, {todo})
        .then(response => {
          if (response.data.id) {
            this.handleData()
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
        this.setState({
            title: '',
            url:'',
            image_uploaded: false,
            imageName: false,
          });
        
      };

    imageUpload=(e)=>{
      console.log('image upload is working')
      let name = e.target.files[0].name
      uploadFile(e.target.files[0], config)
      .then((data)=>{
        if(data.location !== ''){
          this.setState({
            url: data.location,
            image_uploaded: true,
            imageName: name,
           })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    deleteRoute=(event)=>{
      axios.delete(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.state.id}}`)
       .then(response => {
         if(response.status===200){
          this.handleData()
         } 
       })
       .catch(error => console.log('api errors:', error))
       this.setState({
        modal: false,
      })  
      document.body.style.overflow = "unset";
    }
    deletePlant=(event)=>{
      console.log(event)
      const id = event.target.value
      this.setState({
          modal: true,
          id: id,
      })
      document.body.style.overflow = "hidden";
      
  }
  updatePlant=(event)=>{
    console.log(event)
    const id = event.target.value
    this.setState({
        id: id,
        update: true
    })
    document.body.style.overflow = "hidden";
    
}
  cancelDelete=()=>{
    this.setState({
        modal: false,
        id: '',
    })  
    document.body.style.overflow = "unset";
  }
  expand= ()=>{
    this.setState({
      toggle: !this.state.toggle,
    });

    } 
    
   
    
    render(){
        const title = this.state.title;
        const plants = this.state.plants.length
        return(
          <>
          <div className="hero intro" id='my-plants' >
            <div className='content'>
              <h2>  Welcome back,  {this.props.name}!</h2>
              <div className='subtitle'>List all of your plants and keep track of their progress</div>
            </div>
            <div className='image'></div>
          </div>
          <div className='intro my-plants'>
            <div className='plant-links'>
              <a href='#plants'>My Plants</a>
              <a href='#add-plant'>Add New Plant</a>
              <a href='#manage-plants'> Manage Plants</a>
            </div>
            {this.state.modal &&
                <DeleteModal delete={this.state.modal} deleteRoute={this.deleteRoute} cancelDelete={this.cancelDelete} />
            }
            <form onSubmit={this.handleSubmit}  id='add-plant'>
            <h4>Add New Plant</h4>
            <div className='inputs'>
              <input
                  placeholder="Name of the plant..."
                  required="required"
                  type="text"
                  name="title"
                  value= {title}
                  onChange={this.handleChange}
              />
              <label htmlFor="file-upload" className={this.state.imageName ? "custom-file-upload dark" : "custom-file-upload "}><FaFileImage />{this.state.imageName ? this.state.imageName : 'Upload Image...'}</label>
              <input type='file'  id='file-upload' className="custom-file-input" required="required" onChange={this.imageUpload}/>
              </div>
              {this.state.image_uploaded  &&
                <button id='active' placeholder="submit" type="submit"> Add Plant</button>
              }
              {!this.state.image_uploaded &&
                <button id='disabled' disabled> Add Plant</button>
              }
          </form>
            <div className='plants-list' id='plants'>
              {/* <h4> My Plants</h4> */}
              <div className='row'>
                {plants > 0 && <>
                  {this.state.plants.map((el, idx)=>{
                    return <div className='card' key={el.id}>
                      <div className = 'image'>
                        <img  className="img" key={el.url} src={el.url} />
                      </div>
                      <h5 key={idx}>{el.title}</h5>
                      <div className='buttons'>
                        <Link className='viewNotes' to={{
                          pathname: `/my-plants/logs`,
                          state: { 
                            plant_id: el.id, 
                            plant_name: el.title,
                            plant_image: el.url
                          }}}>
                            <button className='button-bottom'>Notes</button>
                        </Link>
                      </div>
                    </div>
                  })}
                </>
              }
             { plants < 1 && 
             <h4>Sorry, but you do not have any entries</h4>
             }
           </div>
          </div>
          {this.state.update &&
            < UpdatePlant  imageName={this.state.imageName} user_id = {this.state.user_id} plant_id={this.state.id} imageUpload={this.imageUpload}/>
          }
          
           <div className='all-plants'  id='manage-plants'>
           <div className='accordion'  onClick={this.expand}>
              <div className='title' >
                <h4 className= {this.state.toggle ? 'translate':null}>ManagePlants</h4>
                < FaPlus className={this.state.toggle ? 'open':null} />
              </div>
              < div className={this.state.toggle?'plantsManage show': 'plantsManage hide'}>
              {this.state.plants.map((el, idx)=>{ 
                return < div className='plant' key={idx}>
                <h5>{el.title}</h5> 
                  <button id='delete' value={el.id} onClick={this.deletePlant}>Delete</button>
                  <button id='update' value={el.id} onClick={this.updatePlant}>Update</button>
                </div>
              }
              )
            }
            </div>
           </div>
              
          </div>
         
            </div>
          </>
        )
    }

}

export default MyPlants