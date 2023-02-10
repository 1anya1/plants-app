import React from "react";
import pestList from "./pestList";
import "./Pests.scss";


class Pests extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: pestList,
      toggle: false,
      id: null,
    };
    this.expand = this.expand.bind(this);
  }

  expand(item) {
    console.log(item.id);
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
    console.log(this.state.id);
    console.log(this.state.cards);
    return (
      <>
        <div className="hero intro" id="pestPage">
          <div className="content">
            <h4>Houseplants and unwelcomed guests</h4>
            <div className="subtitle">
              Identify the signs of pest infestation and prevent a outbreak.
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="pestPage intro">
          <div className="column ">
          <div className="care-list">
            {this.state.cards.map((el, idx) => {
              return (
                <>
                  <a href={`#${el.hash}`}>
                    <div className="symbols">
                      <div className="care">
                        <h5>{el.name}</h5>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
            {this.state.cards.map((item) => (
              <div className="card " key={item.id}>
                <div id="pest-card" className="show">
                  <div className="img">
                    <img className="image" src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <h5 className="title">{item.name}</h5>

                    <div className="content">
                      <div className="subtitle2">Spot Them</div>
                      <p className="text">{item.findThem}</p>
                      <div className="subtitle2">Treatment</div>
                      <p className="text">{item.treatment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Pests;
