import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener("click", (e) => {
      if (e.target.className === "modal") {
        this.handleClick();
      }
    });
  }
  handleClick() {
    this.props.handleClick(this.props.modal);
  }
  render() {
    if (this.props.modal !== null) {
      return (
        <div className="modal">
          <div className="modal-card">
            <div className="image">
              <img
                className="popUpCardPink"
                loading="lazy"
                src={this.props.modal.url}
                alt={this.props.modal.name}
              />
            </div>
            <div className="plant-info">
              <h4 className="itemName"> {this.props.modal.name}</h4>
              <div className="plant-spec">
                <div className="overline">Scientific Name</div>
                <div className="text italic">
                  {this.props.modal.scientificName}
                </div>
              </div>
              <div className="plant-spec">
                <div className="overline">Height</div>
                <div className="text">{this.props.modal.height}</div>
              </div>
              <div className="plant-spec">
                <div className="overline">Temperature</div>
                <div className="text">{this.props.modal.temperature}</div>
              </div>
              <div className="plant-spec">
                <div className="overline">Humidity</div>
                <div className="text">{this.props.modal.humidity}</div>
              </div>
              <div className="plant-spec">
                <div className="overline">Pests</div>
                <div className="text">{this.props.modal.bugs}</div>
              </div>
              <ul className="overline">
                Common Issues:
                {this.props.modal.issues.map((item) => (
                  <li className="text" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="button" onClick={this.handleClick}>
              Back to Plant
            </button>
          </div>
        </div>
      );
    } else {
      return <div className="modal hide"> </div>;
    }
  }
}
