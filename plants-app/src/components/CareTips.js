import React from 'react';
import mySVG from './Svg.js'
import './CareTips.scss'


const careType = [ 'Sun', 'Watering', 'Humidity', 'Temperature', 'Fertilizing', 'Repotting', 'Prunning', 'Travel Care'
    ]

class CareTips extends React.Component{
    render(){
       return (
        <div id='care-tips'>
            <h3>Things to consider with indoor plants</h3>
        <div className='care-list'>
            {Object.keys(mySVG).map((el,idx)=>{
                 const Component = mySVG[el]
                return (
                <>
                <a>
                    <div className='care'>
                    < Component  />
                    <h5>{careType[idx]}</h5>
                    </div>
                </a>
                </>
                )
            })}
        </div>
        </div>
       ) 
    }
}

export default CareTips

