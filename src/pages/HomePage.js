import React from "react";
import getDatabase from "./firebase";
const db = getDatabase();

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
  }
  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        let blankusers = [];
        querySnapshot.forEach(doc => {
          blankusers.push(doc.data());
        });
        this.setState({ users: blankusers });
      });
    db.collection("posts")
      .get()
      .then(querySnapshot => {
        let blankposts = [];
        querySnapshot.forEach(doc => {
          blankposts.push(doc.data());
        });
        this.setState({ posts: blankposts });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid grey",
            height: "100vh",
            display: "flex"
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              border: "2px solid black",
              height: "100%",
              flex: 1
            }}
          >
            <center>
              <h1>Tweets</h1>
              {this.state.users.map((user, i) => (
                <div key={i}>{user.name}</div>
              ))}
            </center>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              border: "2px solid black",
              height: "100%",
              flex: 1
            }}
          >
            <center>
              <h1>Posts</h1>
              {this.state.posts.map((post, i) => (
                <div key={i}>{post.text}</div>
              ))}
            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
