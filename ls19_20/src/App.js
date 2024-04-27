import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Form from './components/Form';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/comments">Comments</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  </Router>
);

export default App;