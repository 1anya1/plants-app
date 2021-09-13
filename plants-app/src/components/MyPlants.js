import React from 'react'
import axios from 'axios'
import './MyPlants.scss'
import {uploadFile} from 'react-s3'

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
            plants_id: ''
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
                        plants: response.data.todos
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
        console.log(url)
        let todo = {
          title: title,
          url: url
        }
        console.log(todo)
        axios.post(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos`, {todo})
        .then(response => {
          console.log(response.data)
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
            url:''
          });
      };

    imageUpload=(e)=>{
      console.log(e.target.files[0])
      uploadFile(e.target.files[0], config)
      .then((data)=>{
        console.log(data.location)
        this.setState({
          url: data.location
         })
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    handleDelete=(event)=>{
      event.preventDefault()
      console.log(event.target.value)
      const id = event.target.value
      axios.delete(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${id}}`)
       .then(response => {
         console.log(response)
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
                    <input type='file' onChange={this.imageUpload}/>
                    <button placeholder="submit" type="submit">
                      Add Plant
                    </button>
                </form>
            <div className='my-list'>
             {plants > 0 && <>
               {this.state.plants.map((el, idx)=>{
                return <div className='plant' key={el.id}>
                  <h1 key={idx}>{el.title}</h1>
                  <img key={el.url} src={el.url} />
                  <button value={el.id} onClick={this.handleDelete}>Delete</button>
                  <button>Add Note</button>
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