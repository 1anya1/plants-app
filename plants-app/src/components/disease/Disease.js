import React from "react";
import "./Disease.scss";
import diseaseList from "./diseaseList";

class Disease extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: diseaseList,
      toggle: false,
      id: null,
    };
    this.expand = this.expand.bind(this);
  }
  expand(item) {
    if (item.id === this.state.id) {
      this.setState({
        toggle: !this.state.toggle,
        id: null,
      });
    } else if (this.state.id === null) {
      this.setState({
        toggle: !this.state.toggle,
        id: item.id,
      });
    } else {
      this.setState({
        id: item.id,
      });
    }
  }
  render() {
    return (
      <>
        <div className="hero intro" id="diseasePage">
          <div className="content">
            <h4>Plant Disease</h4>
            <div className="subtitle">
              Read up on most common viral and bacterial infections that infect
              house plants.
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="diseasePage">
          
          <div className="column intro">
          <div className="care-list">
            {this.state.cards.map((el) => {
              return (
      
                  <a href={`#${el.hash}`} key={el.hash}>
                    <div className="symbols">
                      <div className="care">
                        <h5>{el.name}</h5>
                      </div>
                    </div>
                  </a>
          
              );
            })}
          </div>
            {this.state.cards.map((item) => (
              <div
                className={
                  this.state.id === item.id && this.state.toggle
                    ? "active card"
                    : "card"
                }
                key={item.id}
              >
                <div id={item.hash} className="show disease-card">
                  <div className="img">
                    <img className="image" src={item.img} alt={item.name} />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h5
                        className={
                          this.state.id === item.id && this.state.toggle
                            ? "translate"
                            : null
                        }
                      >
                        {item.name}
                      </h5>
                    </div>
                    <div className="subtitle2">Identification</div>
                    <p className="text">{item.identification}</p>
                    <div className="subtitle2">Treatment</div>
                    <p className="text">{item.treatment}</p>
                  </div>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Disease;
