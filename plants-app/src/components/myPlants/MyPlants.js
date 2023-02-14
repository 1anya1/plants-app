import React from "react";
import axios from "axios";
import "./MyPlants.scss";
import { Link } from "react-router-dom";
import NewPlant from "./newModal/AddPlant";

class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      user_id: null,
      modal: false,
      addPlant: false,
      id: "",
      toggle: false,
      imageName: false,
      totalNotes: 0,
    };
    this.handleData = this.handleData.bind(this);
  }
  componentDidMount() {
    this.handleData();
  }
  handleData() {
    axios
      .get(`https://salty-peak-61296.herokuapp.com/users/${this.props.userId}`)
      .then((response) => {
        if (response.data) {
          this.setState({
            plants: response.data.todos,
            user_id: this.props.userId,
          });
        } else {
          console.log("error");
        }
      });
  }

  modalActive = () => {
    document.querySelector("nav").classList.remove("show-nav");
    document.querySelector("nav").classList.add("hide-nav");
    document.body.classList.add("active-overlay");
  };
  deactivateModal = () => {
    this.setState({ addPlant: false });
    document.querySelector("nav").classList.add("show-nav");
    document.querySelector("nav").classList.remove("hide-nav");
    document.body.classList.remove("active-overlay");
  };

  render() {
    const plants = this.state.plants.length;
    // const totalNotes = this.state.plants.reduce((total, el) => {
    //   return total + el.plants.length;
    // }, 0);

    return (
      <>
        {this.state.addPlant && (
          <NewPlant
            userId={this.props.userId}
            handleData={this.handleData}
            deactivateModal={this.deactivateModal}
          />
        )}
        <div className="hero intro" id="my-plants">
          <div className="content">
            <h4> Welcome back, {this.props.name}!</h4>
          </div>
          <div className="image"></div>
        </div>
        <div className="intro my-plants">
          <div className="plant-links">
            <button
              className="button-medium"
              onClick={() => {
                this.setState({ addPlant: true });
                this.modalActive();
              }}
            >
              Add New Plant
            </button>

            <Link
              to={{
                pathname: `/my-plants/manage`,
                state: {
                  plants: this.state.plants,
                  userId: this.state.user_id,
                },
              }}
            >
              <button className="button-medium">Manage Plants</button>
            </Link>
          </div>
          {/* <div>
            <div>
              <h5>Total Plants</h5>
              <h4>{plants}</h4>
            </div>
            <div>
              <h5>Total Notes</h5>
              <h4>{totalNotes}</h4>
            </div>
          </div> */}
          <div className="plants-list" id="plants">
            <div className="row">
              {plants > 0 && (
                <>
                  {this.state.plants.map((el, idx) => {
                    return (
                      <Link
                        key={el.id}
                        className="viewNotes"
                        to={{
                          pathname: `/my-plants/logs`,
                          state: {
                            plant_id: el.id,
                            plant_name: el.title,
                            plant_image: el.url,
                          },
                        }}
                      >
                        <div className="card" key={el.id}>
                          <div className="ghost-box"></div>
                          <div className="image">
                            <img
                              alt={el.id}
                              className="img"
                              key={el.url}
                              src={el.url}
                            />
                          </div>
                          <h5 key={idx}>{el.title}</h5>
                        </div>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
            {!plants && (
              <h6>
                You do not have any plants listed. Click on "Add New Plant" to
                get started.
              </h6>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default MyPlants;
