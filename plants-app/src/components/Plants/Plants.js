import React from "react";
import plantList from "../data/plantList";
import "./Plants.scss";
import Cards from "./Cards";

class Plants extends React.Component {
  constructor() {
    super();
    this.state = {
      plants: plantList,
    };
  }

  render() {
    return (
      <>
        <div className="hero intro" id="plant-search">
          <div className="content">
            <h4 >House Plants</h4>
            <div className="subtitle">
              Get to know what your green friends and keep your garden both
              happy and green.
            </div>
          </div>
         
        </div>
        <div className="allPlants intro">
          <Cards cards={this.state.plants} />
        </div>
      </>
    );
  }
}
export default Plants;
