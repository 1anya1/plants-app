import React from 'react'
import './Disease.css'

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
                        <h1 className='header'>  Plant</h1> 
                        <h1 className='header'><i>Disease</i> </h1> 
                   </div>
                </header>
                <div className='intro'>
                    <p>Houseplants can be troubled by small, unwelcomed guests. Here is a quick reference guide to help you to identify the signs of pest infestation and how to combat them.</p>
                    <p>The best way to avoid pests is to keep your plant healthy. Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants.</p>
                    <h3 className ='quote'> "Healthy plants will be less likely to to fall prey to incects than stressed and unhalthy plants."</h3>
                    <p>In addition these pests can also make their way into your home on new plants, so it is very important to inspect new plants prior to bringing them home</p>
                    <p>You are most likely to find these pests on buds, stems, leaves, and the soil of your plant</p>
                    </div>
                <div className = 'allPests'>
                    {this.state.disease.map( disease =>{
                        return (
                            <div className = 'pest' key={disease.id} >
                                <img className='cards' src={disease.img} alt={disease.name}/>
                                <p className = 'title'>{disease.name}</p>
                                <p><b>Identification:</b> {disease.findThem}</p>
                                <p><b>Treatment:</b> {disease.treatment}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Disease;