import React, { Component } from "react";
import Modal from "./Modal";
import { FaSistrix } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null,
      filter: "",
      option: "allPlants",
      name: "All Plants",
      cards: [],
      dropdown: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount = () => {
    this.setState({
      cards: this.props.cards,
      option: "allPlants",
    });
  };
  handleChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleOption = (value, name) => {
    console.log(value, name);
    this.setState({
      option: value,
      filter: "",
      name: name,
    });
  };
  toggle(card) {
    if (this.state.modal) {
      this.setState({
        modal: null,
      });
      document.body.style.overflow = "unset";
      document.querySelector("nav").classList.add("show-nav");
      document.querySelector("nav").classList.remove("hide-nav");
    } else {
      this.setState({
        modal: card,
      });
      document.body.style.overflow = "hidden";
      document.querySelector("nav").classList.remove("show-nav");
      document.querySelector("nav").classList.add("hide-nav");
    }
  }

  render() {
    const { filter, cards, option } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const optionChoice = cards.filter((item) => {
      return Object.keys(item).some((key) => {
        if (option === "allPlants") {
          return cards;
        } else {
          return key === option && item[key] === true;
        }
      });
    });
    const filteredData = optionChoice.filter((item) => {
      return Object.keys(item).some((key) => {
        return (
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      });
    });
    const myData = filteredData.map((card, id) => (
      <div
        className="card"
        key={card.name}
        onClick={this.toggle.bind(this, card)}
      >
        <div className="ghost-box"></div>
        <div className="image">
          <img
            className="img"
            loading="lazy"
            src={require("../../img/plants/" + card.img).default}
            alt={card.name}
          ></img>
        </div>
        <div className="plant-id">
          <h5>{card.name}</h5>
          <div className="subtitle">{card.scientificName}</div>
        </div>
      </div>
    ));
    const noData = (
      <div>
        <h5> Sorry, no results match your search. </h5>
        <p>Try another search. Some examples: spider plant, humidity, etc. </p>
      </div>
    );
    const options = [
      { allPlants: "All Plants" },
      { petFriendly: "Pet Friendly Plants" },
      { lowLight: "Low Light Plants" },
      { hangingPlant: "Hanging Plants" },
    ];
    console.log(option);

    return (
      <>
        <div className="search-menu">
          <div className="search">
            <div className="search-bar">
              <input
                className="searchBar"
                placeholder="Search..."
                value={filter}
                onChange={this.handleChange}
              />
              <FaSistrix />
            </div>
            <div
              className="dropDown"
              onClick={() => this.setState({ dropdown: !this.state.dropdown })}
            >
              <div className="options">
                <p className="input" onChange={this.handleOption}>
                  {this.state.name}
                </p>
                <FaCaretDown className={this.state.dropdown ? "active" : ""} />
              </div>
              <div
                className={
                  this.state.dropdown ? "active-dropdown" : "inactive-dropdown"
                }
              >
                {options.map((opt) =>
                  Object.keys(opt).map((key, id) => (
                    <div
                      onClick={() => this.handleOption(key, opt[key])}
                      className={`${
                        this.state.option === key
                          ? "active-key"
                          : "inactive-key"
                      }`}
                    >
                      <p
                        name={opt[key]}
                        key={id}
                        value={key}
                        className="option"
                      >
                        {opt[key]}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        {myData.length > 0 ? (
          <div className="row ">
            {myData}
            <Modal modal={this.state.modal} handleClick={this.toggle} />
          </div>
        ) :
        <div>{noData}</div>
        }
      </>
    );
  }
}
export default Cards;
