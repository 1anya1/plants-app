import React from "react";
import mySVG from "../data/Svg";
import "./CareTips.scss";
import careTips from "./careTipsSvg";

const careType = [
  "Sun",
  "Watering",
  "Humidity",
  "Temperature",
  "Fertilizing",
  "Repotting",
  "Prunning",
  "TravelCare",
];

class CareTips extends React.Component {
  render() {
    return (
      <>
        <div className="hero intro " id="care-tips">
          <div className="content">
            <h4>Tips to keep your green friends healthy and happy</h4>
          </div>
          <div className="image"></div>
        </div>
        <div className="care-tips intro">
          <div className="care-list">
            {Object.keys(mySVG).map((el, idx) => {
              return (
                <a href={`#${careType[idx]}`}>
                  <div className="symbols">
                    <div className="care">
                      {/* < Component  /> */}
                      <h5>{careType[idx]}</h5>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          {careType.map((el, idx) => {
            const Data = careTips[el];
            return (
              <div className="paragraphs ">
                <div className="header">
                  <p id={el} className="subtitle2">
                    {careType[idx]}
                  </p>
                </div>
                {Data.map((el, idx) => {
                  if (idx % 2 === 0) {
                    return <h6>{el}</h6>;
                  } else {
                    return <p>{el}</p>;
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default CareTips;
