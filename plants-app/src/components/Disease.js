import React from 'react'
import './Disease.scss'

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
                <header className='cover diseasePage'>
                    <div className='title'>
                        <h1 className='header1' >  Plant</h1> 
                        <h1 className='header1' ><i>Disease</i> </h1> 
                    </div>
                </header>

                <div className='intro purple'>
                    <p><b id='purple'style={{fontSize: 30}}>Just</b> like people or pets, houseplants occasionally succumb to 
                    disease. In the worst case, disease can kill a plant. But many times, if you know what to look for, you can 
                    spot warning signs of an outbreak and act to defeat the disease.</p>

                    <p><b id='purple'style={{fontSize: 30}}>If</b> for your houseplants correctly is the best defense
                     against diseases. Pay attention to the needs of the plant like light, water, and humidity requirements.</p>

                    <h3 className ='quote' id='purple'> "Overwatering is the number one killer of house plants."</h3>

                    <p><b id='purple'style={{fontSize: 30}}>Many</b> common houseplant diseases operate in an opportunistic fashion,
                     taking hold when plants are stressed due to unfavorable growing conditions. Just as with plant pests, 
                     good plant care is key to prevention. And always keep in mind that overwatering is the number one killer of plants.</p>
                </div>

                <div className='backgroundColor' id='lightPurple'>
                    <h2 className= 'header2' id='purple'>Common House Plant Disease</h2>
                        <div className='rowLayout'>
                            {this.state.disease.map( disease =>{
                                return (
                                 <div className = 'cardItem' key={disease.id} >
                                    <img className='cards' id='purpleBorder' src={disease.img} alt={disease.name}/>
                                    <h3 className = 'itemName'id='purple' >{disease.name}</h3>
                                    <p><b>Identification:</b> {disease.findThem}</p>
                                    <p><b>Treatment:</b> {disease.treatment}</p>
                                  </div>
                                )
                            })}
                        </div>
                </div>
            </div>
        )
    }

}

export default Disease;