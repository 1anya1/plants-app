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
            <header className=' cover plantsCover'>
                <div className='title'>
                    <h1 className='header1'>HOUSE  </h1> 
                    <h1 className='header1'><i>PLANTS</i> </h1> 
                </div>
            </header>  
            <div className='intro'>
                <p>A couple of words on plants... Proper watering and lighting are the most important components of indoor plant care. Humidity and temperatures also play a role. The trick is to try to mimic the climate of the place that plant came from.</p>
                <p>If you’re caring for indoor plants for the first time, this short guide will get you started on the right path.</p> 
             </div>    
        <h3 className='careHeading'>Tips to keep your green friends healthy and happy</h3>
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

