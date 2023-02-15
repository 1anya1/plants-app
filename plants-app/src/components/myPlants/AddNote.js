import React, { Component } from "react";
import axios from "axios";
import mySVG from "../data/Svg";
import "./AddNote.scss";
import DeleteModal from "./modaDelete/ModalDelete";
import NewNote from "./newModal/newNote";
import moment from "moment";
import { Link } from "react-router-dom";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.history.location.state.plant_id,
      name: this.props.history.location.state.plant_name,
      image: this.props.history.location.state.plant_image,
      notes: [],
      modal: false,
      note_id: "",
      userId: this.props.userId,
      newNote: false,
    };
  }
  componentDidMount() {
    this.handleNote();
  }
  handleNote = () => {
    axios
      .get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
      .then((response) => {
        if (response.data) {
          for (let i = 0; i < response.data.todos.length; i++) {
            if (response.data.todos[i].id === this.state.id) {
              this.setState({
                notes: response.data.todos[i].plants,
              });
            }
          }
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  deleteNote = (id) => {
    this.setState({
      modal: true,
      note_id: id,
    });
    document.body.classList.add("active-overlay");
    document.querySelector("nav").classList.remove("show-nav");
    document.querySelector("nav").classList.add("hide-nav");
  };
  deleteRoute = async () => {
    await axios
      .delete(
        `https://salty-peak-61296.herokuapp.com/users/${this.props.userId}/todos/${this.state.id}/plants/${this.state.note_id}`
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            modal: false,
            note_id: "",
          });
          document.body.classList.remove("active-overlay");
          document.querySelector("nav").classList.add("show-nav");
          document.querySelector("nav").classList.remove("hide-nav");
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
    this.handleNote();
  };
  cancelDelete = () => {
    this.setState({
      modal: false,
      note_id: "",
    });
    document.body.classList.remove("active-overlay");
    document.querySelector("nav").classList.add("show-nav");
    document.querySelector("nav").classList.remove("hide-nav");
  };
  newNote = () => {
    this.setState({
      newNote: !this.state.newNote,
    });
    document.querySelector("nav").classList.remove("show-nav");
    document.querySelector("nav").classList.add("hide-nav");
    document.body.style.overflow = "hidden";
  };
  closeNote = () => {
    this.setState({
      newNote: !this.state.newNote,
    });
    document.querySelector("nav").classList.remove("hide-nav");
    document.querySelector("nav").classList.add("show-nav");
    document.body.style.overflow = "unset";
  };

  render() {
    let sortedNotes = this.state.notes.sort((a, b) => {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d - c;
    });
    return (
      <>
        <DeleteModal
          delete={this.state.modal}
          deleteRoute={this.deleteRoute}
          cancelDelete={this.cancelDelete}
        />
        <div className="hero intro" id="plant-logs">
          <div className="content">
            <h4> Notes for {this.state.name}</h4>
            <div className="breadcrums">
              <Link
                to={{ pathname: "/my-plants" }}
                style={{ textTransform: "unset" }}
              >
                <p>My Plants</p>
              </Link>
              <p>{">"}</p>
              <p>Manage Plants</p>
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="intro plant-logs">
          <div className="links">
            <button className="button-large" onClick={this.newNote}>
              Add New Note
            </button>
          </div>

          <div
            className={this.state.newNote ? "new-note show" : " new-note hide"}
          >
            <NewNote
              userId={this.state.userId}
              id={this.state.id}
              handleNote={this.handleNote}
              newNote={this.state.newNote}
              exitNote={this.closeNote}
            />
          </div>

          <div className="notes">
            {this.state.notes.length > 0 &&
              sortedNotes.map((el, idx) => {
                return (
                  <div
                    className="note"
                    key={`entry${idx}`}
                    style={
                      this.state.modal ? { zIndex: "-1" } : { zIndex: "0" }
                    }
                  >
                    <h5>{moment(el.date).format("MM/DD/YYYY")}</h5>
                    <div className="todos">
                      {el.water === true && <mySVG.Watering />}
                      {el.fertilize === true && <mySVG.Fertilizer />}
                      {el.prune === true && <mySVG.Propagating />}
                      {el.repot && <mySVG.Repotting />}
                    </div>
                    <p>{el.notes}</p>
                    <button
                      className="button-medium"
                      onClick={() => this.deleteNote(el.id)}
                    >
                      Remove Note
                    </button>
                  </div>
                );
              })}
          </div>
          {this.state.notes.length === 0 && (
            <h6>
              Sorry, but you do not have any entries yet. Add a new note to get
              started.
            </h6>
          )}
        </div>
      </>
    );
  }
}
export default AddNote;
