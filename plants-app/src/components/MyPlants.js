import React from 'react'
import axios from 'axios'

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
        axios.get(`http://localhost:4000/users/${this.props.userId}`)
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
    axios.post(`http://localhost:4000/users/${this.props.userId}/todos`, {todo})
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
            <div>
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