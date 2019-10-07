import React from "react";
import ReactDOM from "react-dom";
import jquery from "jquery";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      displayCow: null,
      cowName: "",
      cowDescription: ""
    };
    /////////////////////////////bind -- if you're manipulating state -- you need to bind the funciton within the constructor
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCows = this.getCows.bind(this);
    this.displayAtTop = this.displayAtTop.bind(this);
    this.updateCowName = this.updateCowName.bind(this);
    this.updateCowDescription = this.updateCowDescription.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/cows", {
        cowname: this.state.cowName,
        description: this.state.cowDescription
      })
      .then(response => {
        console.log("success? this is response", response);
      })
      .catch(error => {
        console.log("Error occured on axios post request", error);
      })
      .finally(() => {
        this.getCows();
      });
  }

  handleDelete(e) {
    e.preventDefault();
    axios
      .delete("/api/cows", {
        data: { cowname: this.state.cowName }
      })
      .then(response => {
        console.log("Delete was successful", response);
      })
      .catch(error => {
        console.log("Error occured on delete", error);
      })
      .finally(() => {
        this.getCows();
      });
  }

  handleUpdate(e) {
    e.preventDefault();
    axios
      .put("/api/cows", {
        cowname: this.state.cowName,
        description: this.state.cowDescription
      })
      .then(response => {
        console.log("Update was successful", response);
      })
      .catch(error => {
        console.log("Error occured on put", error);
      })
      .finally(() => {
        this.getCows();
      });
  }

  displayAtTop(cow) {
    this.setState({ displayCow: cow.cowname + ": " + cow.description });
  }

  updateCowName(e) {
    this.setState({
      cowName: e.target.value
    });
  }

  updateCowDescription(e) {
    this.setState({
      cowDescription: e.target.value
    });
  }

  getCows() {
    axios
      .get("/api/cows")
      .then(response => {
        this.setState({ cows: response.data });
      })
      .catch(error => {
        console.log("Error occured on axios get request", error);
      })
      .finally(() => {});
  }

  //as soon as virtual dom is connected to html, didmount is fired
  //clean up componentDidMount
  componentDidMount() {
    this.getCows();
  }

  render() {
    return (
      <div>
        <h3>{this.state.displayCow}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Cow name:{" "}
            <input
              type="text"
              value={this.state.cowName}
              onChange={e => this.updateCowName(e)}
            />
          </label>
          <br />
          <label>
            Cow description:{" "}
            <input
              type="text"
              value={this.state.cowDescription}
              onChange={e => this.updateCowDescription(e)}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
          <button value="Update" onClick={this.handleUpdate}>
            Update
          </button>
          <button value="Delete" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
        <div>
          {this.state.cows.map(cow => {
            return (
              <div onClick={() => this.displayAtTop(cow)}>{cow.cowname}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
