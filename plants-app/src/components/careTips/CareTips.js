import React from 'react';
import mySVG from '../data/Svg'
import './CareTips.scss'
import careTips from './careTipsSvg'


const careType = [ 'Sun', 'Watering', 'Humidity', 'Temperature', 'Fertilizing', 'Repotting', 'Prunning', 'TravelCare'
    ]

class CareTips extends React.Component{
    render(){
       return (
        <>
       <div className="container intro" id='care-tips' >
            <div className='header'>
                <h3>Tips to keep your green friends healthy and happy</h3>
                <div className='subtitle'>The trick is to try to mimic the climate of the place that plant came from..</div>
            </div>
            <div className='image'></div>

              
        </div>
        <div className='intro care-tips'>
            <div className='care-list'>
                {Object.keys(mySVG).map((el,idx)=>{
                    const Component = mySVG[el]
                    const Data = careTips[careType[idx]]
                    return (
                    <>
                        <div className='symbols'>
                            <a href={ `#${careType[idx]}`} >
                                <div className='care'>
                                    < Component  />
                                    <h5>{careType[idx]}</h5>
                                </div>
                            </a>
                        </div>
                    </>
                    )
                })}
            </div>
        <div>
            {careType.map((el, idx)=>{
                const Data = careTips[el]
                return(
                    <>
                    <div className='overline' id={el}>{careType[idx]}</div>
                    {Data.map((el, idx)=>{
                        if(idx%2===0){
                           return  <h4>{el}</h4>
                        } else{
                           return  <p>{el}</p>
                        }
                })}
                    
                    </>
                )
               
            })}
        </div>
        </div>
        </>
       ) 
    }
}

export default CareTips

