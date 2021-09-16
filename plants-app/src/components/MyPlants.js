import React from 'react'
import axios from 'axios'
import './MyPlants.scss'
import {uploadFile} from 'react-s3'
import {Link} from 'react-router-dom'

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
          });
        
      };

    imageUpload=(e)=>{
      uploadFile(e.target.files[0], config)
      .then((data)=>{
        if(data.location !== ''){
          this.setState({
            url: data.location,
            image_uploaded: true
           })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    handleDelete=(event)=>{
      event.preventDefault()
      const id = event.target.value
      axios.delete(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${id}}`)
       .then(response => {
         if(response.status===200){
          this.handleData()
         } 
       })
       .catch(error => console.log('api errors:', error))
    }
 
   
    
    render(){
        const title = this.state.title;
        const plants = this.state.plants.length
      console.log(this.state.plants)
        return(
            <div id="my-plants">
              <div className='cover'>
                     <h1 className='header'>
                        Welcome back,  {this.props.name}!
                    </h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="title"
                        required="required"
                        type="text"
                        name="title"
                        value= {title}
                        onChange={this.handleChange}
                    />
                    <input type='file' required="required" onChange={this.imageUpload}/>
                    {this.state.image_uploaded  &&
                      <button id='active' placeholder="submit" type="submit"> Add Plant</button>
                    }
                    {!this.state.image_uploaded &&
                      <button id='disabled' disabled> Add Plant</button>
                    }
                </form>
            <div className='my-list'>
             {plants > 0 && <>
               {this.state.plants.map((el, idx)=>{
                return <div className='plant' key={el.id}>
                  <h1 key={idx}>{el.title}</h1>
                  <img key={el.url} src={el.url} />
                  <button value={el.id} onClick={this.handleDelete}>Delete</button>
                  <Link to={{
                    pathname: `/my-plants/logs`,
                    state: { 
                    plant_id: el.id
                  }}}>Notes</Link>
                  {/* <button value={el.id} >Add Note</button> */}
                </div>
              })}
             </>
             }
             { plants < 1 && 
             <h1>Sorry, but you do not have any entries</h1>

             }
          
            
           </div>
            
            </div>
        )
    }

}

export default MyPlants