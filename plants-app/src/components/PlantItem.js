import React from 'react'

function PlantItem(props) {
    return (
        <div className = 'plant'>
            <img src={props.plant.img} alt={props.plant.name}/>
            <p>Common Name: {props.plant.name}</p>
            <p>Scientifuc Name: {props.plant.scientificName}</p>
            <p>Height: {props.plant.height}</p>
            <p>Temperature: {props.plant.temperature}</p>
            <p>Humidity: {props.plant.humidity}</p>
            <ul> Common Issues:
                {props.plant.issues.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <p>Pest Problems: {props.plant.bugs}</p>
           
            
            

        </div>
    )
}

export default PlantItem