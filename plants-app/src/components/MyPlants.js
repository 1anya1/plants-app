import React from 'react'
import axios from 'axios'
import './MyPlants.scss'
import {uploadFile} from 'react-s3'

console.log(process.env.REACT_APP_API_KEY)
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
        }
        this.handleData = this.handleData.bind(this)
    }
    componentDidMount() {
        this.handleData()
    }
    handleData(){
        axios.get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
        .then(response => {
            console.log(response.data)
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
          if (response.data.status === 'created') {
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
          this.handleData()
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
   
    
    render(){
        const title = this.state.title;
       
        console.log(this.state.plants.length)
        
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
            {this.state.plants.map((el, idx)=>{
            return <div className='plant' key={el.title+idx}>
              <h1 key={idx}>{el.title}</h1>
              <img key={el.url} src={el.url} />
            </div>
          })}
            
           </div>
            
            </div>
        )
    }

}

export default MyPlants