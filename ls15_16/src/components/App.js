
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
import SingleUser from './components/SingleUser';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Comments from './components/Comments';
import SingleComment from './components/SingleComment';

const App = () => {
  // отримати дані з API

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users/:id">
          <SingleUser users={users} />
        </Route>
        <Route path="/users">
          <Users users={users} />
        </Route>
        <Route path="/posts/:id">
          <SinglePost posts={posts} />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} />
        </Route>
        <Route path="/comments/:id">
          <SingleComment comments={comments} />
        </Route>
        <Route path="/comments">
          <Comments comments={comments} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;