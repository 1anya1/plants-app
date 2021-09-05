import React from 'react';
import mySVG from '../data/Svg'
import './CareTips.scss'
import careTips from '../data/Care-Tips'


const careType = [ 'Sun', 'Watering', 'Humidity', 'Temperature', 'Fertilizing', 'Repotting', 'Prunning', 'TravelCare'
    ]

class CareTips extends React.Component{
    render(){
       return (
        <div id='care-tips'>
            <h2>Things to consider with indoor plants</h2>
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
                    <h3 id={el}>{careType[idx]}</h3>
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
       ) 
    }
}

export default CareTips

