import React from 'react'
import axios from 'axios'
import './MyPlants.scss'

class MyPlants extends React.Component {
    constructor(props){
        super(props)
        this.state={
            plants:[],
            title:'',
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
        let todo = {
          title: title
        }
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
            title: ''
          });
          this.handleData()
      };

          
   
    
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
                        type="text"
                        name="title"
                        value= {title}
                        onChange={this.handleChange}
                    />
                    <button placeholder="submit" type="submit">
            Add Plant
          </button>
                </form>
            {}
            <div>
            {this.state.plants.map((el, idx)=><h1 key={idx}>{el.title}</h1>)}
            </div>
            
            </div>
        )
    }

}

export default MyPlants