import React from 'react'

function PlantItem(props) {
    return (
        <div className = 'plant'>
            <img className='cards' src={props.plant.img} alt={props.plant.name}/>
            <p><b>Common Name: </b>{props.plant.name}</p>
            <p><b>Scientific Name: </b> <i>{props.plant.scientificName}</i></p>
            <p><b>Height: </b>{props.plant.height}</p>
            <p><b>Temperature: </b>{props.plant.temperature}</p>
            <p><b>Humidity: </b>{props.plant.humidity}</p>
            <p> <b>Bugs: </b>{props.plant.bugs}</p>
            <ul><b>Common Issues:</b>
                {props.plant.issues.map(item => (
                    <li key={item}> <img src='https://i.imgur.com/vqgeRl4.png?2'/> {item}</li>
                ))}
            </ul>
            
           
            
            

        </div>
    )
}

export default PlantItem