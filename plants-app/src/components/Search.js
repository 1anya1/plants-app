import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      plants: e.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Poet: </label>
        <input type="text" id="filter" 
          value={this.state.plants} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm