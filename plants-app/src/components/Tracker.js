import React from 'react';
import './Tracker.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class Tracker extends React.Component {
    state = {
        posts: [],
        formInputs: {
            date: '',
            title: '',
            notes: '',
            img:'',
          }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () =>{
        fetch('http://localhost:3000/forms')
            .then(response => response.json())
            .then(json => this.setState({ posts: json }))
        .catch(error => console.error(error))
    }
    handleChange = (event) => {
        const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
        this.setState(updateInput)
      }
    handleSubmit = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3000/forms', {
          body: JSON.stringify(this.state.formInputs),
          method: 'POST',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
       .then(createdPost => {
         return createdPost.json()
       })
       .then(jsonedPost => {
        
         this.setState({
            formInputs: {
                date: '',
                title: '',
                notes: '',
                img:''
              },
           posts: [jsonedPost, ...this.state.posts]
         })
       })
       .catch(error => console.log(error))
    }

    
  render() {
    console.log(this.state.posts)
    return (
        <div>
            <header className='cover homeTracker'>
                <div className='title'>
                    <h1 className='header1'>PLANT</h1> 
                    <h1 className='header1' ><i>TRACKER</i> </h1> 
                  </div>
            </header>

            <div className='intro purple'>
                    <p><b id='purple'style={{fontSize: 30}}>Keep</b> track of your plant progress here. 
                    Add the date and a note to the status of your plants. If you want to you can also add a 
                    photo that you can reference to later.</p>
            </div>


      <Form className='form' onSubmit={this.handleSubmit}
      style={{ backgroundColor: '#e8ecff', fontFamily: 'Montserrat'}}>


        <FormGroup row>
          <Label for="date" sm={2}>Date</Label>
          <Col sm={10}>
            <Input value={this.state.formInputs.date}
                onChange={this.handleChange} type="date" name="date" id="date" placeholder="Date" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input value={this.state.formInputs.title}
                    onChange={this.handleChange} type='text' name="title" id='title' placeholder="" />
          </Col>
        </FormGroup>


        <FormGroup row>
          <Label for="notes" sm={2}>Notes</Label>
          <Col sm={10}>
            <Input value={this.state.formInputs.notes}
                    onChange={this.handleChange} type='textarea' name="notes" id='notes' placeholder="" />
          </Col>
        </FormGroup>
       
        
        <FormGroup row>
          <Label for="photos" sm={2}>Photos</Label>
          <Col sm={10}>
            <Input value={this.state.formInputs.img}
            onChange={this.handleChange}type="text" name="img" id="img" placeholder="image URL" />
          </Col>
        </FormGroup>


        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
            style={{ backgroundColor: 'white', fontFamily: 'Montserrat', color:'#8198ff', borderColor: '#8198ff'}}>
            
                Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      <div>
      {this.state.posts.map( post => {
          return  (
              <div key={post.id} className="post">
                  <h1>{ post.title }</h1>
                  <h4>{ post.date}</h4>
                  <p>{ post.notes}</p>
                  <img  className='trackerImage'
                  style={{ width: 200, fontFamily: 'Montserrat', color:'#8198ff'}}
                  src={ post.img}></img>
                  
              </div>
          )
      })}
  </div>
 </div>
    );
  }
}


export default Tracker; 