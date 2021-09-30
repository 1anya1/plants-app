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
        fetch('https://plantly111.herokuapp.com/diseases')
            .then(response => response.json())
            .then(json => this.setState({ disease: json }))
        .catch(error => console.error(error))
    }
    render() {
        return(
            <>
            <div className="container" id='diseasePage' >
                <div className='header'>
                    <h3>House Plant Disease</h3>
                    <div className='subtitle'>Just like people or pets, houseplants occasionally succumb to disease. But, if you know what to look for, you can 
                    spot warning signs of an outbreak and act to defeat the disease.</div>
                </div>
                <div className='block'>
                    <div className='image'></div>
                </div>
              
            </div>

            <div className='intro purple'>
                <h4> "Overwatering is the number one killer of house plants."</h4>
            </div>
            <div className='rowLayout'>
                {this.state.disease.map( disease =>{
                    return (
                     <div className = 'cardItem' key={disease.id} >
                        <img className='cards' id='purpleBorder' src={disease.img} alt={disease.name}/>
                        <h4 className = 'itemName'id='purple' >{disease.name}</h4>
                        <div className='type'>
                            <div>
                                <div className='subtitle2'>Identification:</div>
                                <p>{disease.findThem}</p>
                            </div>
                            <div>
                                <div className='subtitle2'>Treatment:</div>
                                <p> {disease.treatment}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
        )}
}

export default Disease;