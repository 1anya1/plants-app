import React from 'react'
import './Disease'

class Disease extends React.Component {
    state = {
        disease: []
    }

    componentDidMount() {
        this.getDisease()
    }
    getDisease = () =>{
        fetch('http://localhost:3000/diseases')
            .then(response => response.json())
            .then(json => this.setState({ disease: json }))
        .catch(error => console.error(error))
    }
    render() {
        console.log(this.state.disease)
        return(
            <div>
                <header className='diseaseCover'>
                    <div className='headerTwo'>
                        <h1 className='header'>HOUSE  </h1> 
                        <h1 className='header'><i>PLANTS</i> </h1> 
                   </div>
                </header>
                <div>
                    {this.state.disease.map( disease =>{
                        return (
                            <div key={disease.id} className='disease'>
                                <h1>{disease.name}</h1>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Disease;