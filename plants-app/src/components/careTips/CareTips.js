import React from 'react';
import mySVG from '../data/Svg'
import './CareTips.scss'
import careTips from './careTipsSvg'


const careType = [ 'Sun', 'Watering', 'Humidity', 'Temperature', 'Fertilizing', 'Repotting', 'Prunning', 'TravelCare'
    ]

class CareTips extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
       return (
        <>
       <div className="hero intro" id='care-tips' >
            <div className='content'>
                <h2>Tips to keep your green friends healthy and happy</h2>
                {/* <div className='subtitle'>The trick is to try to mimic the climate of the place that plant came from..</div> */}
            </div>
            <div className='image'></div>

              
        </div>
        <div className='care-tips'>
            <div className='care-list'>
                {Object.keys(mySVG).map((el,idx)=>{
                    const Component = mySVG[el]
                    const Data = careTips[careType[idx]]
                    return (
                    <>
                        <a href={ `#${careType[idx]}`} >
                            <div className='symbols'>
                                <div className='care'>
                                    < Component  />
                                    <h5>{careType[idx]}</h5>
                                </div>
                            </div>
                        </a>
                    </>
                    )
                })}
            </div>
            {careType.map((el, idx)=>{
                const Data = careTips[el]
                return(
                    <div className='paragraphs intro'>
                        <div className='subtitle2' id={el}>{careType[idx]}</div>
                        {Data.map((el, idx)=>{
                            if(idx%2===0){
                                return  <h4>{el}</h4>
                            } else{
                                return  <h5>{el}</h5>
                            }
                        })}
                    </div>
                )
               
            })}
        </div>
        </>
       ) 
    }
}

export default CareTips

