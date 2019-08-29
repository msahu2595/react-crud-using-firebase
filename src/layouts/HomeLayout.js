import React from "react";
import { Link } from "react-router-dom";

const HomeLayout = props => (
  <React.Fragment> 
    <div style={styles.parentStyle}>
      <div style={styles.child1}>
        <center>
          <h1>MENU</h1>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <Link to='/'>HomePage</Link>
          <Link to='/addtweet'>Add Tweet</Link>
          <Link to='/addpost'>Add Post</Link>
        </div>
        </center>
      </div>
      <div style={styles.child2}>{props.children}</div>
    </div>
  </React.Fragment>
);

const styles = {
  parentStyle: {
    border: "1px solid grey",
    height: "100vh",
    display: "flex"
  },
  child1: {
    border: "1px solid red",
    height: "100%",
    flex: 1,
    backgroundColor: "yellow",
    color: "red"
  },
  child2: {
    border: "1px solid green",
    height: "100%",
    flex: 4
  }
};

export default HomeLayout;
