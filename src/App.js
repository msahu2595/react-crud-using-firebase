import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { HomePage, TweetPage, PostPage } from "./pages";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/addtweet' component={Tweet} />
        <Route exact path='/addpost' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

const NotFound = () => {
  return <h1>Url Not Found</h1>;
};

const Home = () => {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
};

const Tweet = () => {
  return (
    <HomeLayout>
      <TweetPage />
    </HomeLayout>
  );
};

const Post = () => {
  return (
    <HomeLayout>
      <PostPage />
    </HomeLayout>
  );
};

export default App;
