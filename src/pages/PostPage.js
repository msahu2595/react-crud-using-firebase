import React from "react";
import getDatabase from "./firebase";

const db = getDatabase();

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      posts: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    db.collection("posts")
      .add({ text })
      .then(docRef => {
        const availablePosts = this.state.posts;
        availablePosts.unshift({ text });
        this.setState({ users: availablePosts });
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
            name="text"
            onChange={this.handleChange}
            placeholder="Make Post"
          />
          <input type="submit" value={"submit"} />
        </form>
        </center>
      </React.Fragment>
    );
  }
}

export default PostPage;
