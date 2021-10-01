import React from 'react'
import './Disease.scss'
import diseaseList from './diseaseList'
class Disease extends React.Component {
    state = {
        disease: diseaseList
    }
    render() {
        console.log(this.state.disease)
        return(
            <>
            <div className="container intro" id='diseasePage' >
                <div className='header'>
                    <h3>House Plant Disease</h3>
                    <div className='subtitle'>Just like people or pets, houseplants occasionally succumb to disease. But, if you know what to look for, you can 
                    spot warning signs of an outbreak and act to defeat the disease.</div>
                </div>
                    <div className='image'></div>
            </div>
            <h4> "Overwatering is the number one killer of house plants."</h4>
            <div className='cards-layout'>
                {this.state.disease.map( (disease, idx) =>{
                    return (
                     <div className = 'card' key={idx} >
                         <div className='image'>
                            <img src={disease.img} alt={disease.name}/>
                         </div>
                        <h4 >{disease.name}</h4>
                        <div className='type'>
                            <div>
                                <div className='subtitle2'>Identification:</div>
                                <p>{disease.identification}</p>
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