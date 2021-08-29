import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import './Nav.scss'
// import {ReactComponent as Sun} from '../img/svg/sun.svg'
import mySVG from './Svg.js'


const careType = [ 'Watering', 'Lighting','Propagating','Temperature','Humidity', 'Repotting', 'Fertilizing', 'Cleaning','Vacation Care'
    ]

const careList = careType.map((el,id)=>{
    return <p className='care-list' key={id}>{el}</p>
})




class Home extends React.Component{
    
    render() {
        console.log(typeof mySVG)
        console.log(careList)
        return (
            <div id='main'>
                 <header className='cover'>
                     <h1 className='header'>
                         A Place To track and watch your plants grow
                    </h1>
                </header>
                <div className='intro'>
                    <div>
                        {careList}
                        < mySVG.Sun/>
                        
                    
                       
                    </div>
                    <img src ={require('../img/svg/vacation.svg').default} />
                    <p> Sun, water and soil are crucial to the life of 
                    house plants. Most plants you purchase will come with a quick reference guide. But do you really 
                    know what your plant needs? </p>

                    <p>Keeping plants around the house isn’t as scary as you might think; you 
                    just need to know what they like in order to keep your indoor garden both happy and green. </p>

                    <p>Houseplants or indoor plants are plants that grow indoors. 
                    Houseplants are popular because they are relatively easy to take care of, provide health benefits 
                    and can be used in a variety of indoor décor themes.</p>
                    
                    <h2> "Plants provide health benefits and can be used in a variety of indoor décor themes."</h2>

                    <p>Plantly is a house plant app that has it all. 
                    Search common house plants, learn about plant care and gain understanding on how to identify deisease and common pests.</p>

                    <p> Our library contains the most popular house palnts that continues to grow</p>
                        <button className = 'home-button'><Link to="/plants" className='buttonGreen'>Discover House Plants</Link></button>
                    
                    <p>Keep track of your plants using our tracker. Add dates, notes,
                     and photos that you can always refer back to. </p>
        
                </div> 
            </div>
        )
    }

}

export default Home;

 