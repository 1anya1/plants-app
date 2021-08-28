import React from "react";

let svg = <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 397.963 397.963" >
<g>
	<g>
		<path d="M363.044,5.362c-0.53-1.948-1.849-3.587-3.64-4.52h0c-3.534-1.87-7.915-0.521-9.786,3.013    c-0.005,0.009-0.01,0.018-0.014,0.027c0,0.2-36.68,71.36-149.28,83.76c-14.688,1.567-29.045,5.399-42.56,11.36    c-24.191,10.517-44.17,28.821-56.76,52c-11.754,21.773-16.622,46.601-13.96,71.2c1.961,17.932,7.95,35.189,17.52,50.48    c-20,14.36-83.44,64-89.16,117.28c-0.42,3.976,2.464,7.54,6.44,7.96c3.977,0.42,7.54-2.464,7.96-6.44    c5.24-47.56,64.76-93.68,83.32-107.04c22.28,27.36,55.64,42.8,91.44,45.32c24.095,1.555,48.219-2.554,70.44-12    c24.122-10.121,45.426-25.948,62.08-46.12C380.004,219.642,400.444,132.242,363.044,5.362z M117.284,265.522L117.284,265.522    c-2.76-4.347-5.193-8.893-7.28-13.6c-4.392-9.933-7.225-20.483-8.4-31.28c-2.45-21.665,1.734-43.564,12-62.8    c11.096-20.394,28.697-36.488,50-45.72c12.179-5.303,25.105-8.689,38.32-10.04c74.32-8,118.04-41.08,140.6-65.08    c-13.255,43.639-36.076,83.773-66.8,117.48l-4.4-44.32c-0.224-3.992-3.642-7.047-7.634-6.823    c-3.992,0.224-7.047,3.642-6.823,7.634c0.011,0.197,0.03,0.394,0.057,0.589l5.64,56.96    C228.924,202.642,182.164,236.922,117.284,265.522z M325.884,262.362v0.04c-15.132,18.423-34.515,32.892-56.48,42.16    c-20.199,8.536-42.122,12.208-64,10.72c-30.457-1.543-59.038-15.179-79.4-37.88c23.862-10.559,46.934-22.817,69.04-36.68l63.56,12    c3.95,0.619,7.654-2.082,8.273-6.032c0.597-3.81-1.898-7.42-5.673-8.208l-48.84-9.24c22.551-15.488,43.543-33.131,62.68-52.68    c0.351-0.302,0.672-0.637,0.96-1c50.48-52.56,71.96-104.56,80.92-136.56C381.644,144.442,362.724,217.802,325.884,262.362z"/>
	</g>
</g>
</svg>
export default class Modal extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        this.props.handleClick(this.props.modal)
    }
  render() {
         if(this.props.modal !==null){
             console.log('lets return something')
             return(
                <div className= "modal" > 
                    <div className='modal-card'>
                    <img className='popUpCardPink' src={require('..//img/plants/'+ this.props.modal.img).default} alt={this.props.modal.name}/>
                        <div className = 'plant-info'>
                        <h2 className='itemName'> {this.props.modal.name}</h2>
                        <div>
                            <h4>Scientific Name: </h4>
                            <h5>{this.props.modal.scientificName}</h5>
                        </div>
                        <div>
                            <h4>Height:</h4>
                            <h5>{this.props.modal.height}</h5>
                        </div>
                        <div>
                            <h4>Temperature: </h4>
                            <h5>{this.props.modal.temperature}</h5>
                        </div>
                        <div>
                            <h4>Humidity: </h4>
                            <h5>{this.props.modal.humidity}</h5>
                        </div>
                        <div>
                            <h4>Pests:</h4>
                            <h5>{this.props.modal.bugs}</h5>
                        </div>
                        <ul>Common Issues:
                             {this.props.modal.issues.map(item => (
                               <li key={item} > {svg} {item}</li>
                                   ))}
                        </ul>
                    </div>
                    <button onClick = {this.handleClick}>Back to Plant</button>
                    </div>
                </div>
             )
         } else{
             return <div className="modal hide"> </div>
         }

  }
}
{/* <img src={require('..//img/plants/aloe-vera.png').default} alt={this.props.modal.name}/> */}