import React from "react";
import getDatabase from "./firebase";

const db = getDatabase();

class TweetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      users: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    db.collection("users")
      .add({ name })
      .then(docRef => {
        const availableUsers = this.state.users;
        availableUsers.unshift({ name });
        this.setState({ users: availableUsers });
        alert("submitted");
        window.location.href = "http://localhost:3000/";
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
          <center>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            placeholder="Make Tweet"
          />
          <input type="submit" value={"submit"} />
        </form>
        </center>
      </React.Fragment>
    );
  }
}

export default TweetPage;
