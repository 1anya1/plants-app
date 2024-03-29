import React, { Component } from "react";
import mySVG from "../../data/Svg";
import axios from "axios";
import "./newNote.scss";
import { FaTimesCircle } from "react-icons/fa";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.handleNote = this.handleNote.bind(this);
    this.state = {
      water: false,
      fertilize: false,
      prune: false,
      repot: false,
      comment: "",
      img: "",
      date: "",
      modal: false,
      note_id: "",
    };
  }
  handleNote() {
    this.props.handleNote(this.props.handleNote);
  }
  exitNote = () => {
    this.props.exitNote(this.props.exitNote);
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { water, fertilize, prune, repot, comment, img, date } = this.state;
    let plant = {
      water: water,
      fertilize: fertilize,
      prune: prune,
      repot: repot,
      notes: comment,
      img: img,
      date: date,
    };

    await axios
      .post(
        `https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.props.id}/plants`,
        { plant }
      )

      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
    this.setState({
      water: false,
      fertilize: false,
      prune: false,
      repot: false,
      comment: "",
      img: "",
      date: "",
    });
    this.handleNote();
    this.exitNote();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="note-add">
        <div className="heading">
          <h5>Add A New Note</h5>
          <FaTimesCircle onClick={this.exitNote} />
        </div>
        <div className="form-inputs">
          <input
            type="date"
            placeholder="Date:   "
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
          <div className="care-box">
            <div className="care-type">
              <input
                type="checkbox"
                id="watered"
                name="water"
                onChange={this.handleInputChange}
                checked={this.state.water}
              />
              <label
                htmlFor="watered"
                className={`${this.state.water ? "clicked" : ""} option`}
              >
                <mySVG.Watering />
              </label>
            </div>
            <div className="care-type">
              <input
                type="checkbox"
                id="fertilize"
                name="fertilize"
                onChange={this.handleInputChange}
                checked={this.state.fertilize}
              />
              <label
                htmlFor="fertilize"
                className={`${this.state.fertilize ? "clicked" : ""} option`}
              >
                <mySVG.Fertilizer />
              </label>
            </div>
            <div className="care-type">
              <input
                type="checkbox"
                id="prune"
                name="prune"
                onChange={this.handleInputChange}
                checked={this.state.prune}
              />
              <label
                htmlFor="prune"
                className={`${this.state.prune ? "clicked" : ""} option`}
              >
                <mySVG.Propagating />
              </label>
            </div>
            <div className="care-type">
              <input
                type="checkbox"
                id="repot"
                name="repot"
                onChange={this.handleInputChange}
                checked={this.state.repot}
              />
              <label
                htmlFor="repot"
                className={`${this.state.repot ? "clicked" : ""} option`}
              >
                <mySVG.Repotting />
              </label>
            </div>
          </div>
          <textarea
            placeholder="notes"
            name="comment"
            value={this.state.comment}
            rows="5"
            cols="33"
            onChange={this.handleChange}
          />
        </div>

        <button className="button-large" placeholder="submit" type="submit">
          Add Note
        </button>
      </form>
    );
  }
}
export default NewNote;
