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
            <div className="hero intro" id='diseasePage' >
                <div className='content'>
                    <h2>House Plant Disease</h2>
                    <div className='subtitle'>Plants occasionally succumb to disease. But, if you know what to look for, you can 
                    stop an outbreak.</div>
                </div>
                    <div className='image'></div>
            </div>
            <div className='diseasePage'>
            <div className='wave'>
            {/* <h4 className='intro'> "Overwatering is the number one killer of house plants."</h4> */}
            </div>
            <div className='cards-layout intro'>
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
            </div>
        </>
        )}
}

export default Disease;